/**
 * Icon Mapping Utility for Sanity Hero Section
 *
 * This utility provides a bridge between string-based icon names stored in Sanity
 * and the actual Lucide React icon components used in the frontend.
 *
 * Why this is needed:
 * - Sanity stores icon names as strings (e.g., "users", "dumbbell")
 * - React components need actual icon components to render
 * - This mapping ensures type safety and prevents runtime errors
 *
 * Usage in components:
 * const IconComponent = getIcon("users"); // Returns Users component
 * <IconComponent className="h-5 w-5" />
 *
 * To add new icons:
 * 1. Import the icon from 'lucide-react'
 * 2. Add it to the iconMap object with a lowercase key
 * 3. Add the same key to the heroSection schema options list
 */

import {
  Users,
  Dumbbell,
  Globe,
  Star,
  Heart,
  Trophy,
  Target,
  Activity,
  Calendar,
  Award,
  ArrowRight,
  TrendingUp,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  Crown,
  ExternalLink,
  Flame,
  Play,
  User,
  Code,
  FileText,
  Key,
  LucideIcon,
} from "lucide-react";

/**
 * Icon Name to Component Mapping
 *
 * Maps lowercase string identifiers to their corresponding Lucide React components.
 * The keys must match the values in the heroSection Sanity schema.
 *
 * Key naming convention:
 * - Use lowercase names that are descriptive
 * - Match the icon's general meaning/usage
 * - Keep names short but clear
 */
export const iconMap: Record<string, LucideIcon> = {
  users: Users, // Community, members, people
  dumbbell: Dumbbell, // Gym, fitness, strength training
  globe: Globe, // Global reach, worldwide
  star: Star, // Excellence, rating, premium
  heart: Heart, // Health, wellness, care
  trophy: Trophy, // Achievement, success, winner
  target: Target, // Goals, precision, focus
  activity: Activity, // Fitness tracking, health metrics
  calendar: Calendar, // Scheduling, appointments
  award: Award, // Recognition, certification
  arrowright: ArrowRight, // Direction, progress
  trendingup: TrendingUp, // Growth, improvement
  shield: Shield, // Security, protection
  zap: Zap, // Energy, power
  checkcircle: CheckCircle, // Verification, completion
  clock: Clock, // Time, scheduling
  crown: Crown, // Premium, elite
  externallink: ExternalLink, // External navigation
  flame: Flame, // Fire, energy
  play: Play, // Start, begin
  user: User, // Individual, person
  code: Code, // Programming, development
  filetext: FileText, // Documents, content
  key: Key, // Security, access, trust
  // Capital case versions for backward compatibility
  Users,
  Calendar,
  Award,
  Dumbbell,
  ArrowRight,
  Heart,
  Target,
  Trophy,
  Star,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle,
  Clock,
  Crown,
  ExternalLink,
  Flame,
  Play,
  User,
  Code,
  FileText,
  Key,
};

/**
 * Get Icon Component by Name
 *
 * Safely retrieves a Lucide icon component by its string identifier.
 * Provides fallback to prevent crashes if an invalid icon name is used.
 *
 * @param iconName - The string identifier for the icon (case-insensitive)
 * @returns The corresponding Lucide React icon component
 *
 * Examples:
 * getIcon("users") → Users component
 * getIcon("DUMBBELL") → Dumbbell component
 * getIcon("invalid") → Users component (fallback)
 */
export const getIcon = (iconName: string): LucideIcon => {
  return iconMap[iconName.toLowerCase()] || Users; // fallback to Users icon
};

// Helper function to get icon component by name (for exact case matching)
export const getIconComponent = (iconName: string): LucideIcon => {
  return iconMap[iconName] || iconMap[iconName.toLowerCase()] || Users; // Try exact match first, then lowercase, then fallback
};

/**
 * Available Icon Names
 *
 * Export for use in other parts of the application where you need
 * to know which icons are available.
 */
export const availableIcons = Object.keys(iconMap);

/*
 * To add more icons:
 *
 * 1. Import from lucide-react:
 *    import { NewIcon } from "lucide-react";
 *
 * 2. Add to iconMap:
 *    newicon: NewIcon,
 *
 * 3. Update heroSection.ts schema options list:
 *    { title: 'New Icon', value: 'newicon' }
 *
 * Popular icons you might want to add:
 * - Zap (energy, power)
 * - Shield (security, protection)
 * - Award (recognition, certification)
 * - Clock (time, scheduling)
 * - MapPin (location, local)
 * - Smartphone (mobile app, technology)
 */
