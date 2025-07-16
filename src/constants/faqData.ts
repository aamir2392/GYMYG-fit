type FAQ = {
  question: string;
  answer: string;
};

export const productFaqs: FAQ[] = [
  {
    question: "Is GYMYG suitable for all ages and fitness levels?",
    answer:
      "The beauty of having one-on-one’s with members during class is that we are able to completely customize the workout to whatever your skill and comfort level might be. Whether you’ve never worked out before or if you’re a pro but you have an injury— you’ll be able to write it in your settings so that your trainer can see it in your notes, or let your trainer and coaches know before the class starts. We want GYMYG to be for everyone— no matter your age or level.",
  },
  {
    question: "Is it really live training?",
    answer:
      "Yes, it’s really live. One of the best parts of going to the gym is seeing your friends and making new ones. We wanted to bring human connection to virtual training. <br /> <br /> Our trainers and coaches will be guiding you through the workout and offering any adjustments and encouragements in <b>real time</b>. No pre-recorded videos or generic scripts.",
  },
  {
    question: "How do you offer on-demand training 24 hours a day?",
    answer:
      "Our trainers are from all over the world, allowing us to cover various timezones. This means that no matter what time it is where you are, there will always be a trainer available to you. Other members of your class might be from all kinds of different countries— we encourage you to talk to them and make new friends all over the globe!",
  },
  {
    question: "Are your trainers vetted?",
    answer:
      "All of our trainers are certified with NASM, ACE, or their country’s equivalent training certification.",
  },
  {
    question: "Can I talk to the other members in class?",
    answer:
      "We encourage you to do so! Your fellow members will not only be from all over the country, but some will be from other parts of the world. We hope that you all laugh, have fun, and enjoy the community that GYMYG offers. <br /> <br /> If you choose to do so, you will also be able to share your social media handles with anyone you’d like.",
  },
  {
    question: "Can the whole class hear one-on-ones?",
    answer:
      "When you and a coach are in a one-on-one during the workout, yours and your coaches screens will turn black and white. The rest of the class can see that you’re talking to each other, but cannot fully hear what is being said. Kind of like when you’re in a class at the gym and the teacher goes up to someone and offers an adjustment— you know it’s happening but you can only hear a little of what they’re saying.",
  },
];

export const clientFaqs: FAQ[] = [
  {
    question:
      "My spouse/kid/parent/friend wants to take class with me at my house. Is that okay?",
    answer:
      "If someone in your household would like to work out with you, that’s okay with us. We ask that you please keep it to <b>no more than TWO people per video screen</b>.",
  },
  {
    question:
      "Sorry my dog is barking/the phone is ringing/they're doing construction outside of my house! Is that a problem?",
    answer:
      "Absolutely not! Trainers have the ability to mute the class if there are any distracting noises. If you need to pause the session, you can do so by clicking the pause button in the top right corner of the screen.",
  },
  {
    question: "Can I gift class packages to my friends and family?",
    answer:
      "Yes. In addition to sending them special codes so that you can be in the same workout, you can also gift all of our packages to other people. <br /> <br /> To make sure a gift gets to your recipient, you will be asked to enter their email address at checkout so we can credit the appropriate account.",
  },
  {
    question:
      "There is something wrong with the package I bought. How do I fix it?",
    answer:
      "If you haven’t already reported it through the app, please go to our <a class='text-primary' href='/contact' target='_blank' rel='noopener noreferrer'>contact page</a> and let us know how we can help you.",
  },
  {
    question: "Do I need equipment to do these workouts?",
    answer:
      "You do not need any equipment for a GYMYG workout, though once in a while our trainers offer modifications where a chair or wall to lean on are helpful.",
  },
];

export const trainerFaqs: FAQ[] = [
  {
    question: "What is the difference between a lead trainer and a coach?",
    answer:
      "The LEAD trainer is the trainer taking the entire class through the workout. The two COACHES are there to offer customized modifications and encouragement to our members through one-on-ones.",
  },
  {
    question: "How do I become a lead trainer?",
    answer:
      "You can take our trainer assessment (found on the bottom of the GYMYG for Trainers page). Our training department will be in touch shortly afterwards.",
  },
  {
    question: "Do we have to write the programs ourselves?",
    answer:
      "No. Our team of experts will do that for you. You will receive the program for the Workout Of The Day beforehand. All you have to do is take the class through the workout.",
  },
  {
    question:
      "If clients reach out to us for training outside of GYMYG, is that against the rules?",
    answer:
      "Not at all! There is no exclusivity. If a client reaches out to you for personal training outside of GYMYG, you have our blessing. You will be able to provide the class with your social media handles, should anyone want to reach out to you.",
  },
  {
    question:
      "Do I need to have fancy filming equipment to be a GYMYG trainer?",
    answer:
      "No. While we offer tips on how to make your filming setup decent-looking, we do not require you to have any special equipment or locations in order to train with us. You can train right from your living room.",
  },
  {
    question: "We aren't employees, are we?",
    answer: "No— our trainers are independent contractors.",
  },
];

// Keeping the original export for backward compatibility
export const faqData: FAQ[] = [...productFaqs, ...clientFaqs, ...trainerFaqs];
