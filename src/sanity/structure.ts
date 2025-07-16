import type { StructureResolver } from "sanity/structure";

import {
  ArrowRight,
  Award,
  Code,
  CreditCard,
  Download,
  Dumbbell,
  Gift,
  Globe,
  Heart,
  HelpCircle,
  House,
  Info,
  MessageCircle,
  Package,
  Phone,
  Settings,
  Sparkles,
  Star,
  TrendingUp,
  User,
  UserPlus,
  Users,
  Users2,
} from "lucide-react";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("GYMYG FIT")
    .items([
      // Home Page Sections
      S.listItem()
        .title("Home Page")
        .icon(House)
        .child(
          S.list()
            .title("Home Page Content Management")
            .items([
              S.documentTypeListItem("homeHeroSection")
                .title("Hero Section")
                .icon(Star),
              S.documentTypeListItem("evolution")
                .title("Evolution Journey")
                .icon(TrendingUp),
              S.documentTypeListItem("features")
                .title("Features & Benefits")
                .icon(Sparkles),
              S.documentTypeListItem("trainerMapSection")
                .title("Trainer Map")
                .icon(Globe),
              S.documentTypeListItem("humanConnection")
                .title("Human Connection")
                .icon(Heart),
              S.documentTypeListItem("teamSection")
                .title("Team Section")
                .icon(Users),
              S.documentTypeListItem("homePricing")
                .title("Pricing Section")
                .icon(CreditCard),
              S.documentTypeListItem("testimonialSection")
                .title("Testimonials")
                .icon(MessageCircle),
              S.documentTypeListItem("homeJoinCTA")
                .title("Join CTA")
                .icon(ArrowRight),
            ])
        ),

      S.divider(),

      // Packages Page Sections
      S.listItem()
        .title("Packages Page")
        .icon(Package)
        .child(
          S.list()
            .title("Packages Page Content Management")
            .items([
              S.documentTypeListItem("packagesHero")
                .title("Hero Section")
                .icon(Star),
              S.documentTypeListItem("packagesPricing")
                .title("Pricing Options")
                .icon(CreditCard),
              S.documentTypeListItem("packagesFAQ")
                .title("FAQ Section")
                .icon(HelpCircle),
              S.documentTypeListItem("packagesJoinCTA")
                .title("Join CTA")
                .icon(ArrowRight),
            ])
        ),

      S.divider(),

      // Join Gymyg Page Sections
      S.listItem()
        .title("Join Gymyg Page")
        .icon(UserPlus)
        .child(
          S.list()
            .title("Join Gymyg Page Content Management")
            .items([
              S.documentTypeListItem("joinGymygHero")
                .title("Hero Section")
                .icon(Star),
              S.documentTypeListItem("appDownloadSection")
                .title("App Download")
                .icon(Download),
              S.documentTypeListItem("joinGymygCTA")
                .title("Join CTA")
                .icon(ArrowRight),
            ])
        ),

      S.divider(),

      // Trainers Page Sections
      S.listItem()
        .title("Trainers Page")
        .icon(User)
        .child(
          S.list()
            .title("Trainers Page Content Management")
            .items([
              S.documentTypeListItem("trainerHeroSection")
                .title("Hero Section")
                .icon(Star),
              S.documentTypeListItem("clientsInteraction")
                .title("Clients Interaction")
                .icon(Users2),
              S.documentTypeListItem("trainersAbout")
                .title("About Trainers")
                .icon(Info),
              S.documentTypeListItem("trainerBenefits")
                .title("Trainer Benefits")
                .icon(Award),
              S.documentTypeListItem("trainingOptions")
                .title("Training Options")
                .icon(Dumbbell),
              S.documentTypeListItem("noProgramming")
                .title("No Programming")
                .icon(Code),
            ])
        ),

      S.divider(),

      // Other Sections
      S.listItem()
        .title("Other Sections")
        .icon(Settings)
        .child(
          S.list()
            .title("Additional Content Management")
            .items([
              S.documentTypeListItem("contactUsSection")
                .title("Contact Us")
                .icon(Phone),
              S.documentTypeListItem("promoModal")
                .title("Promo Modal")
                .icon(Gift),
            ])
        ),
    ]);
