import {t} from 'i18next';
import {IMAGES, SVG} from '../assets';
// import {en} from '../labels';
import BottomTab from '../routes/BottomTab';
import {
  ChatScreen,
  ConfirmSignupScreen,
  ContactUs,
  FavoriteScreen,
  ForgotChangePassScreen,
  ForgotChangePassScreenAlly,
  ForgotPasswordScreen,
  HomeScreenAlly,
  LocationScreen,
  LoginScreen,
  MotivatorDescription,
  NewPasswordScreen,
  NotificationScreen,
  OnBoardingScreen,
  OtpVerificationScreen,
  PrivacyPolicy,
  ProfileScreen,
  ProfileScreenTwo,
  SettingScreen,
  SettingScreenTwo,
  SignUpCarousel,
  SignupScreen,
  SignupScreenEight,
  SignupScreenFive,
  SignupScreenFour,
  SignupScreenNine,
  SignupScreenOne,
  SignupScreenSeven,
  SignupScreenSix,
  SignupScreenTen,
  SignupScreenThree,
  SignupScreenTwo,
  TermsAndConditions,
  VideoScreen,
  WorkOutDetailsScreen,
  WorkOutScreen,
} from '../screens';
import ContactScreen from '../screens/ContactScreen/ContactScreen';

/*
 ** Authentication screen
 */
export const authScreens = [
  {
    id: 1,
    screenName: 'OnBoardingScreen',
    component: OnBoardingScreen,
  },
  {
    id: 2,
    screenName: 'LoginScreen',
    component: LoginScreen,
  },
  {
    id: 24,
    screenName: 'SettingScreen',
    component: SettingScreen,
  },
  {
    id: 18,
    screenName: 'HomeScreenAlly',
    component: HomeScreenAlly,
  },
  {
    id: 19,
    screenName: 'MotivatorDescription',
    component: MotivatorDescription,
  },
  {
    id: 3,
    screenName: 'ForgotChangePassScreenAlly',
    component: ForgotChangePassScreenAlly,
  },
  {
    id: 4,
    screenName: 'OtpVerificationScreen',
    component: OtpVerificationScreen,
  },
  {
    id: 5,
    screenName: 'NewPasswordScreen',
    component: NewPasswordScreen,
  },
  {
    id: 5,
    screenName: 'SignUpCarousel',
    component: SignUpCarousel,
  },
  {
    id: 2,
    screenName: 'ConfirmSignupScreen',
    component: ConfirmSignupScreen,
  },
  {
    id: 4,
    screenName: 'ForgotPasswordScreen',
    component: ForgotPasswordScreen,
  },
  {
    id: 5,
    screenName: 'SignupScreen',
    component: SignupScreen,
  },
  {
    id: 6,
    screenName: 'ForgotChangePassScreen',
    component: ForgotChangePassScreen,
  },
  {
    id: 7,
    screenName: 'ContactScreen',
    component: ContactScreen,
  },
  {
    id: 8,
    screenName: 'SignupScreenOne',
    component: SignupScreenOne,
  },
  {
    id: 9,
    screenName: 'SignupScreenTwo',
    component: SignupScreenTwo,
  },
  {
    id: 10,
    screenName: 'SignupScreenThree',
    component: SignupScreenThree,
  },
  {
    id: 11,
    screenName: 'SignupScreenFour',
    component: SignupScreenFour,
  },
  {
    id: 12,
    screenName: 'SignupScreenFive',
    component: SignupScreenFive,
  },
  {
    id: 13,
    screenName: 'SignupScreenSix',
    component: SignupScreenSix,
  },
  {
    id: 14,
    screenName: 'SignupScreenSeven',
    component: SignupScreenSeven,
  },
  {
    id: 15,
    screenName: 'SignupScreenEight',
    component: SignupScreenEight,
  },
  {
    id: 16,
    screenName: 'SignupScreenNine',
    component: SignupScreenNine,
  },
  {
    id: 17,
    screenName: 'SignupScreenTen',
    component: SignupScreenTen,
  },
];

/*
 ** Home stack screen
 */
export const homeScreen = [
  {
    id: 1,
    screenName: 'BottomTab',
    component: BottomTab,
  },
  {
    id: 2,
    screenName: 'SettingScreen',
    component: SettingScreen,
  },
  {
    id: 5,
    screenName: 'MotivatorDescription',
    component: MotivatorDescription,
  },
  {
    id: 4,
    screenName: 'ProfileScreenTwo',
    component: ProfileScreenTwo,
  },
  {
    id: 3,
    screenName: 'ProfileScreen',
    component: ProfileScreen,
  },
  {
    id: 6,
    screenName: 'ChatScreen',
    component: ChatScreen,
  },
  {
    id: 7,
    screenName: 'LocationScreen',
    component: LocationScreen,
  },
  {
    id: 8,
    screenName: 'TermsAndConditions',
    component: TermsAndConditions,
  },
  {
    id: 9,
    screenName: 'PrivacyPolicy',
    component: PrivacyPolicy,
  },
  {
    id: 10,
    screenName: 'ContactUs',
    component: ContactUs,
  },
  {
    id: 11,
    screenName: 'SettingScreenTwo',
    component: SettingScreenTwo,
  },
  {
    id: 12,
    screenName: 'WorkOutDetailsScreen',
    component: WorkOutDetailsScreen,
  },
  {
    id: 13,
    screenName: 'WorkOutScreen',
    component: WorkOutScreen,
  },
];

/*
 **  Bottom tab screens
 */

export const TabScreens = [
  {
    name: 'HomeScreenAlly',
    component: HomeScreenAlly,
    tabBarIcon: SVG.HomeAlly,
    tabBarActiveIcon: SVG.HomeAllyActive,
    tabBarLabel: t('home'),
  },

  // {
  //   name: 'FavoriteScreen',
  //   component: FavoriteScreen,
  //   tabBarIcon: SVG.HeartTab,
  //   tabBarActiveIcon: SVG.HeartAllyActive,
  //   // tabBarLabel: en.favorite,
  //   tabBarLabel: t('favorite'),
  // },
  {
    name: 'VideoScreen',
    component: VideoScreen,
    tabBarIcon: SVG.Dite,
    tabBarActiveIcon: SVG.ActiveDite,
    tabBarLabel: t('Diet'),
  },

  {
    name: 'ProfileScreen',
    component: ProfileScreen,
    tabBarIcon: SVG.ProfileAlly,
    tabBarActiveIcon: SVG.profileActive,
    tabBarLabel: t('Profile'),
  },
];

export const dietPlan = [
  {
    name: 'Breakfast',
    description:
      'Kickstart your day with a power-packed breakfast: a bowl of oatmeal topped with almond butter, banana slices, chia seeds, and a boiled egg on the side. This meal provides the perfect balance of complex carbs, healthy fats, and protein to fuel your morning workout and keep you energized throughout the day. Pair it with a cup of green tea or black coffee for an extra metabolism boost.',
    image: IMAGES.breakfast,
  },
  {
    name: 'Lunch',
    description:
      'Refuel your body with a lean and protein-rich lunch: grilled chicken breast served with fluffy quinoa, steamed broccoli, and a side of mixed greens drizzled with olive oil and lemon dressing. This nutrient-dense meal will help build muscle, aid recovery, and keep you satisfied without feeling heavy. Add some avocado slices for extra healthy fats, and stay hydrated with water or coconut water.',
    image: IMAGES.lunch,
  },
  {
    name: 'Snack',
    description:
      'Stay energized between meals with a wholesome snack: a handful of mixed nuts (almonds, walnuts, cashews) combined with a refreshing protein smoothie made from almond milk, a scoop of protein powder, spinach, and frozen berries. This snack is packed with antioxidants, healthy fats, and protein to support muscle repair and maintain energy levels.',
    image: IMAGES.snack,
  },
  {
    name: 'Dinner',
    description:
      'End your day with a nutritious dinner designed to repair muscles and promote restful sleep: a perfectly seared salmon fillet served with roasted sweet potatoes and sautéed spinach. This meal is rich in omega-3 fatty acids, vitamins, and fiber, supporting heart health and muscle recovery. Drink a calming herbal tea, such as chamomile or peppermint, to aid digestion and relaxation before bed.',
    image: IMAGES.dinner,
  },
];

export const videos = [
  {
    id: 1,
    name: 'cardio',
  },
  {
    id: 2,
    name: 'push Up',
  },
];

export const Beginner = [
  {
    id: '1',
    workOutName: 'Full Body Cardio Beginner',
    totalExercises: '11',
    totalTimes: '20',
    image: IMAGES.absBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/FullBodyCadio%2FfullBodyCadioBeginner.mov?alt=media&token=38f62ae9-a2a6-449a-b187-16889f628c1c',
    exercises: [
      {
        id: 1,
        name: 'Hip Hinge',
        // image: IMAGES.Image11,
        duration: 'x5',
        introduction:
          'Sit your hips back and bend your upper body while keeping your upper body straight.Then slowly go back to the start position and repeat.',
      },
      {
        id: 2,
        name: 'Plank',
        image: IMAGES.plank,
        duration: '15 s',
        introduction:
          'Lie on the floor with your toes and forearms on the ground. Keep your body straight and hold this position as long as you can.',
      },
      {
        id: 3,
        name: 'Floor Dips',
        image: IMAGES.Image11,
        duration: 'x6',
        introduction:
          'Sit on the floor with your knees bent, feet lifted a little bit and back tilted backwards. Then hold your hands together and twist from side to side.',
      },
      {
        id: 4,
        name: 'Jumping Jacks ',
        image: IMAGES.Image11,
        duration: 'x5',
        introduction: 'Start in the squat position. Then jump up using your abdominal muscles for strength.',
      },
      {
        id: 5,
        name: 'Inchworms',
        image: IMAGES.Image11,
        duration: 'x5',
        introduction:
          'Start with your feet shoulder width apart. Bend your body and walk your hands in front of your as far as you can. Then walk your hands back.',
      },
      {
        id: 6,
        name: 'Prone Triceps Push Ups',
        image: IMAGES.Image11,
        duration: 'x8',
        introduction:
          'Lie on your back with your knees bent and your arms stretched forward.Then lift your upper body off the floor. Hold for a few seconds and slowly return.It primarily works the rectus abdominis muscle and the obliques',
      },
      {
        id: 7,
        name: 'Bottom Leg Lift Right',
        image: IMAGES.Image11,
        duration: 'x20',
        introduction:
          'Lie on your right side with your head resting on your right hand. Then put your left foot forward on the floor. Lift your right leg up and down.',
      },
      {
        id: 8,
        name: 'Bottom Leg Lift Left',
        image: IMAGES.Image11,
        duration: 'x20',
        introduction:
          'Lie on your left side with your head resting on your left hand. Then put your right foot forward on the floor. Lift your left leg up and down. ',
      },
      {
        id: 9,
        name: 'Wall Push Ups',
        image: IMAGES.Image11,
        duration: 'x12',
        introduction:
          'Stand in front of a wall one big step away from it. Then put your hands out straight towards the wall and lean against it.',
      },
      {
        id: 10,
        name: 'Mountain Climate',
        image: IMAGES.Image11,
        duration: '12 s',
        introduction:
          'Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch from one leg to the other.',
      },

      {
        id: 11,
        name: 'Leg Raises',
        image: IMAGES.Image11,
        duration: 'x6',
        introduction:
          'Lie down on your back, and put your hands beneath your hips for support.Then lift your legs up until they form a right angle with the floor.Slowly bring your legs back down and repeat the exercise.',
      },
    ],
  },
  {
    id: '2',
    workOutName: 'Leg Beginner',
    totalExercises: '12',
    totalTimes: '7',
    image: IMAGES.legBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Leg%2FlegBeginner.MOV?alt=media&token=0bd72e0b-854a-44a4-8a7c-a8f9fccc8f90',
    exercises: [
      {
        name: 'Side Hop',
        image: IMAGES.Image11,
        duration: 'x10',
        introduction:
          'Sit your hips back and bend your upper body while keeping your upper body straight. Then slowly go back to the start position and repeat.',
      },
      {
        name: 'Child Pose',
        image: IMAGES.Image11,
        duration: '12 s',
        introduction:
          'Start with your knees and hands on the floor. Put your hands a little forward, widen your knees, and put your toes together. Take a breath, then exhale and sit back. Try to make your butt touch your heels. Relax your elbows, make your forehead touch the floor, and try to lower your chest close to the floor. Keep your arms stretched forward as you sit back.',
      },
      {
        name: 'V-Up',
        image: '',
        duration: 'x5',
        introduction:
          'Lie on your back with your arms and legs extended and your legs squeezed together. Raise your upper body and legs, then use your arms to touch your toes. Go back to the start position and repeat.',
      },
      {
        name: 'Burpees',
        image: '',
        duration: 'x5',
        introduction:
          'Stand with your feet shoulder width apart. Put your hands on the ground and kick your feet backward. Do a quick push-up and then jump up.',
      },
      {
        name: 'Squats',
        image: '',
        duration: 'x6',
        introduction:
          'Stand with your feet shoulder width apart and your arms stretched forward. Lower your body until your thighs are parallel with the floor. Your knees should be extended in the same direction as your toes. Return to the start position.',
      },
      {
        name: 'Donkey Kicks Left',
        image: '',
        duration: 'x8',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Lift your left leg and squeeze your butt as much as you can. Go back to the start position and repeat.',
      },
      {
        name: 'Donkey Kicks Right',
        image: '',
        duration: 'x8',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Lift your right leg and squeeze your butt as much as you can. Go back to the start position and repeat.',
      },
      {
        name: 'Push Ups',
        image: '',
        duration: 'x6',
        introduction:
          'Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms.',
      },
      {
        name: 'Diagonal Plank',
        image: '',
        duration: 'x8',
        introduction:
          'Start in the straight arm plank position. Lift your right arm and left leg until they are parallel with the ground. Return to the start position and repeat with the other side.',
      },
      {
        name: 'Bottom Leg Lift Left',
        image: '',
        duration: 'x20',
        introduction:
          'Lie on your left side with your head resting on your left hand. Put your right foot forward on the floor. Lift your left leg up and down.',
      },
      {
        name: 'Bottom Leg Lift Right',
        image: '',
        duration: 'x20',
        introduction:
          'Lie on your right side with your head resting on your right hand. Put your left foot forward on the floor. Lift your right leg up and down.',
      },
      {
        name: 'Jumping Squats',
        image: '',
        duration: 'x5',
        introduction: 'Start in the squat position. Then jump up using your abdominal muscles for strength.',
      },
    ],
  },

  {
    id: '3',
    workOutName: 'ARM BEGINNER',
    totalExercises: '11',
    totalTimes: '17',
    image: IMAGES.armBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Arm%2FArmBeginner.MOV?alt=media&token=41579f9b-d0fb-4c14-b029-f090caaa53d2',
    exercises: [
      {
        name: 'Arm Scissors',
        image: '12 s',
        duration: '30',
        introduction:
          'Stand with your feet shoulder width apart. Lift your arms at shoulder height. Cross your arms in front of you to make a letter X. Return and repeat.',
      },
      {
        name: 'Cobra Stretch',
        image: '12 s',
        duration: '30',
        introduction:
          'Lie on your stomach and put your hands on the floor with your hands under your shoulders. Then push your chest up off the ground as far as possible. Hold this position for seconds.',
      },
      {
        name: 'Mountain Climber',
        image: '',
        duration: '12 s',
        introduction:
          'Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight. Then quickly switch from one leg to the other.',
      },
      {
        name: 'Inchworms',
        image: '',
        duration: 'x5',
        introduction:
          'Start with your feet shoulder width apart. Bend your body and walk your hands in front of you as far as you can. Then walk your hands back.',
      },
      {
        name: 'Push-Up & Rotation',
        image: '',
        duration: 'x6',
        introduction:
          'Start in the push-up position. Go down for a push-up and as you come up, rotate your upper body and extend your right arm upwards. Repeat the exercise with the other arm.',
      },
      {
        name: 'Diamond Push Ups',
        image: '',
        duration: 'x5',
        introduction:
          'Start in the push-up position. Make a diamond shape with your forefingers and thumbs together under your chest. Then push your body up and down. Remember to keep your body straight.',
      },
      {
        name: 'Diagonal Plank',
        image: '',
        duration: 'x8',
        introduction:
          'Start in the straight arm plank position. Lift your right arm and left leg until they are parallel with the ground. Return to the start position and repeat with the other side.',
      },
      {
        name: 'Triceps Kickbacks',
        image: '',
        duration: 'x9',
        introduction:
          'Lean forward, bend your knees and your elbows. Extend your arms behind you and squeeze your triceps. Make your arms parallel to the ground when extending them. Return to the start position and repeat.',
      },
      {
        name: 'Triceps Dips',
        image: '',
        duration: 'x8',
        introduction:
          'Sit on the chair. Move your hip off the chair with your hands holding the edge. Slowly bend and stretch your arms to make your body go up and down.',
      },
      {
        name: 'Push Ups',
        image: '',
        duration: 'x6',
        introduction:
          'Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms.',
      },
      {
        name: 'Burpees',
        image: '',
        duration: 'x5',
        introduction:
          'Stand with your feet shoulder width apart. Put your hands on the ground and kick your feet backward. Do a quick push-up and then jump up.',
      },
    ],
  },
  {
    id: '4',
    workOutName: 'Push Ups Beginner',
    totalExercises: '5',
    totalTimes: '7',
    image: IMAGES.chestBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/pushUp%2FpuchUpBignner.MOV?alt=media&token=6bd4f40a-25a0-48f7-b7db-504e73d7c280',
    exercises: [
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x3',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x3',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
    ],
  },
];

export const Intermediate = [
  {
    id: '1',
    workOutName: 'Full Body Cardio Intermediate',
    totalExercises: '19',
    totalTimes: '20',
    image: IMAGES.absIntermediate,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/FullBodyCadio%2FfullBodyCadioIntermediate.mp4?alt=media&token=2b09517e-1985-41cf-a6d9-91e183099f74',
    exercises: [
      {
        name: 'Side Hop',
        image: '',
        duration: 'x14',
        introduction: 'Stand on the floor. Put your hands in front of you and hop from side to side.',
      },
      {
        name: 'Heel Touch',
        image: '',
        duration: 'x14',
        introduction:
          'Lie on the ground with your legs bent and your arms by your sides. Slightly lift your upper body off the floor and make your hands alternately reach your heels.',
      },
      {
        name: 'Arm Curls Crunch Left',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your left side with your knees bent and lifted. Grasp your left thigh with your left hand and put your right hand behind your head. Then raise your upper body by pulling your left thigh.',
      },
      {
        name: 'Arm Curls Crunch Right',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your right side with your knees bent and lifted. Grasp your right thigh with your right hand and put your left hand behind your head. Then raise your upper body by pulling your right thigh.',
      },
      {
        name: 'Triceps Kickbacks',
        image: '',
        duration: 'x15',
        introduction:
          'Lean forward, bend your knees and elbows. Extend your arms behind you and squeeze your triceps. Keep your arms parallel to the ground when extending them.',
      },
      {
        name: 'Pike Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start with your hands and feet on the floor. Put your hands shoulder-width apart. Bend your body and lift your hips up into an upside-down V shape. Bend your elbows and bring your head close to the floor. Push your body back and repeat.',
      },
      {
        name: 'Jumping Squats',
        image: '',
        duration: 'x20',
        introduction: 'Start in the squat position. Then jump up using your abdominal muscles for strength.',
      },
      {
        name: 'Hindu Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start with your hands and feet touching the floor, with your body bent and butt up in an upside-down V shape. Bend your elbows to bring your body toward the floor. When your body is close to the floor, raise your upper body up as far as possible. Then return to the original position and repeat.',
      },
      {
        name: 'Cat Cow Pose',
        image: '',
        duration: 'x15',
        introduction:
          'Start on all fours with your knees under your butt and your hands directly under your shoulders. Take a breath and make your belly fall down while rolling your shoulders back and lifting your head up toward the ceiling. As you exhale, curve your back upward and let your head come down.',
      },
      {
        name: 'Sit Ups',
        image: '',
        duration: 'x20',
        introduction:
          'Lie on your back with your hands behind your ears. Lift your upper body off the floor and slowly rise to a sitting position. Don’t tug your neck when you get up. Slowly return to the start position and repeat.',
      },
      {
        name: 'Incline Push Ups',
        image: '',
        duration: 'x15',
        introduction:
          'Start in a regular push-up position with your hands elevated on a chair or bench. Push your body up and down using your arm strength. Keep your body straight.',
      },
      {
        name: 'Hyperextension',
        image: '',
        duration: 'x15',
        introduction:
          'Lie down on your stomach with your toes touching the floor and your chin on your hands. Raise your chest up as high as possible off the floor. Hold this position for a few seconds and then return to the start position.',
      },
      {
        name: 'Wide Arm Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start in the regular push-up position with your hands spread wider than your shoulders. Push your body up and down while keeping it straight.',
      },
      {
        name: 'Wall Push Ups',
        image: '',
        duration: 'x15',
        introduction:
          'Stand one big step away from a wall. Put your hands straight towards the wall and lean against it. Lift your heels. Slowly bend your elbows and press your upper body towards the wall. Push back and repeat.',
      },
      {
        name: 'Butt Bridge',
        image: '',
        duration: 'x15',
        introduction:
          'Lie on your back with knees bent and feet flat on the floor. Put your arms flat at your sides. Then lift your butt up and down.',
      },
      {
        name: 'Side Leg Circles Right',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your left side with your head resting on your left hand. Lift your right leg and rotate your foot in circles.',
      },
      {
        name: 'Glute Kick Back Right',
        image: '',
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Kick your right leg back until it is parallel with the ground.',
      },
      {
        name: 'Glute Kick Back Left',
        image: '',
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Kick your left leg back until it is parallel with the ground.',
      },
    ],
  },

  {
    id: '2',
    workOutName: 'Leg Intermediate',
    totalExercises: '19',
    totalTimes: '20',
    image: IMAGES.legIntermediate, // Update with actual image
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Leg%2FlegIntermediate.MOV?alt=media&token=c184d280-fa86-4f49-8e06-ceaeb174ebee',
    exercises: [
      {
        name: 'Jumping Jack',
        image: '', // Add image link
        duration: 'x14',
        introduction: 'Start in the squat position. Then jump up using your abdominal muscles for strength.',
      },
      {
        name: 'Calf Stretch Right',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Stand one big step away in front of a wall. Step forward with your left foot and push the wall with your hands. Make sure your right leg is fully extended and you can feel your right calf stretching.',
      },
      {
        name: 'Calf Stretch Left',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Stand one big step away in front of a wall. Step forward with your right foot and push the wall with your hands. Make sure your left leg is fully extended and you can feel your left calf stretching.',
      },
      {
        name: 'Hindu Push Ups',
        image: '', // Add image link
        duration: 'x10',
        introduction:
          'Start with your hands and feet touching the floor in an upside-down V shape. Then bend your elbows to bring your body towards the floor. When your body is close to the floor, raise your upper body up as far as possible. Then return to the original position and repeat.',
      },
      {
        name: 'Push Ups',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms.',
      },
      {
        name: 'Donkey Kicks Right',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then lift your right leg and squeeze your butt as much as you can. Go back to the start position and repeat.',
      },
      {
        name: 'Donkey Kicks Left',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then lift your left leg and squeeze your butt as much as you can. Go back to the start position and repeat.',
      },
      {
        name: 'Side Lying Leg Lift Left',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lie down on your side with your head rested on your right arm. Lift your upper leg up and return to the start position. Make sure your left leg goes straight up and down during the exercise.',
      },
      {
        name: 'Side Lying Leg Lift Right',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lie down on your side with your head rested on your left arm. Lift your upper leg up and return to the start position. Make sure your right leg goes straight up and down during the exercise.',
      },
      {
        name: 'Fire Hydrant Left',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then lift your left leg to the side at a 90 degree angle.',
      },
      {
        name: 'Fire Hydrant Right',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then lift your right leg to the side at a 90 degree angle.',
      },
      {
        name: 'Glute Kick Back Right',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then kick your right leg back until it is parallel with the ground.',
      },
      {
        name: 'Glute Kick Back Left',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Start on all fours with your knees under your butt and your hands under your shoulders. Then kick your left leg back until it is parallel with the ground.',
      },
      {
        name: 'Side Leg Circles Right',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lie on your left side with your head resting on your left hand. Then lift your right leg and rotate your foot in circles.',
      },
      {
        name: 'Side Leg Circles Left',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lie on your right side with your head resting on your right hand. Then lift your left leg and rotate your foot in circles.',
      },
      {
        name: 'Reverse Flutter Kicks',
        image: '', // Add image link
        duration: 'x14',
        introduction:
          'Lie face down on a bench. Place your butt on the edge of the bench and hold on to the sides. Then lift your legs until they are level with your upper body. Lift one leg higher than the other and then switch to the other leg and repeat.',
      },
      {
        name: 'Curtsy Lunges',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Stand straight up. Then step back with your left leg to the right. Bend your knees at the same time. Go back to the start position and switch to the other side.',
      },
      {
        name: 'Sumo Squat',
        image: '', // Add image link
        duration: 'x12',
        introduction:
          'Stand with your feet 6-12 inches apart. Stretch your arms in front of you. Lower your body until your thighs are parallel to the floor. Return to the starting position and repeat.',
      },
    ],
  },
  {
    id: '3',
    workOutName: 'Arm Intermediate',
    totalExercises: '19',
    totalTimes: '20',
    image: IMAGES.armIntermediate,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Arm%2FArmIntermediate.MOV?alt=media&token=d03bde4f-e6d6-4cad-8223-bace3e83236c',
    exercises: [
      {
        name: 'Arm Circles',
        image: '',
        duration: 'x14',
        introduction:
          'Stand on the floor with your arms extended straight out to the sides at shoulder height. Move your arms forward in circles and then move backwards.',
      },
      {
        name: 'Shoulder Stretch',
        image: '',
        duration: 'x14',
        introduction:
          'Place one arm across your body parallel to the ground. Use the other arm to pull the parallel arm toward your chest. Hold and switch arms. Keep the inside arm straight during the exercise.',
      },
      {
        name: 'Knee Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start in the regular push-up position. Let your knees touch the floor and raise your feet off the floor. Push your body up and down.',
      },
      {
        name: 'Reverse Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Start in the regular push-up position. Lower your body down, bend your knees, and move your hips backward with your arms straight. Go back to the push-up position and repeat.',
      },
      {
        name: 'Military Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Start in a push-up position with your hands directly under your shoulders and feet no more than 12 inches apart. Lower your body until your upper arms are parallel to the floor. Hold for one second, then push back up.',
      },
      {
        name: 'Staggered Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Start in the regular push-up position but with one hand in front of the other. Perform a push-up and switch hand positions.',
      },
      {
        name: 'Decline Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Elevate your feet on a chair or bench and push your body up and down mainly using your arm strength. Keep your body straight.',
      },
      {
        name: 'Side Plank Left',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your left side with your forearm supporting your body. Hold your body in a straight line.',
      },
      {
        name: 'Side Plank Right',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your right side with your forearm supporting your body. Hold your body in a straight line.',
      },
      {
        name: 'Arm Curls Crunch Left',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your left side with knees bent and lifted. Grasp your left thigh with your left hand and raise your upper body by pulling your left thigh.',
      },
      {
        name: 'Arm Curls Crunch Right',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your right side with knees bent and lifted. Grasp your right thigh with your right hand and raise your upper body by pulling your right thigh.',
      },
      {
        name: 'Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms.',
      },
      {
        name: 'Skipping Without Rope',
        image: '',
        duration: 'x30 sec',
        introduction:
          'Place your arms at your sides and pretend to hold a skipping rope handle in each hand. Jump and alternately land on the balls of your feet while rotating your wrists.',
      },
      {
        name: 'Jumping Squats',
        image: '',
        duration: 'x10',
        introduction: 'Start in the squat position. Jump up using your abdominal muscles for strength.',
      },
      {
        name: 'Diagonal Plank',
        image: '',
        duration: 'x10',
        introduction:
          'Start in a straight-arm plank position. Lift your right arm and left leg until parallel with the ground. Repeat with the other side.',
      },
      {
        name: 'Shoulder Gators',
        image: '',
        duration: 'x14',
        introduction:
          'Stand upright with your hands beside your ears and elbows facing each side. Rotate your elbows until both of them are facing the front.',
      },
      {
        name: 'Triceps Dips',
        image: '',
        duration: 'x12',
        introduction:
          'Sit on the chair. Move your hip off the chair with hands holding the edge. Slowly bend and stretch your arms to move your body up and down.',
      },
      {
        name: 'Triceps Kickbacks',
        image: '',
        duration: 'x10',
        introduction:
          'Lean forward with knees and elbows bent. Extend your arms behind you and squeeze your triceps, making your arms parallel to the ground. Go back to the start position.',
      },
    ],
  },
  {
    id: '4',
    workOutName: 'Push Ups Intermediate',
    totalExercises: '5',
    totalTimes: '7',
    image: IMAGES.chestBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/pushUp%2FpuchUpIntermediate.MOV?alt=media&token=a7baf80e-e310-49a0-b02b-81e4ebc054d9',
    exercises: [
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x8',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x9',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x8',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x7',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x8',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
    ],
  },
];

export const Advance = [
  {
    id: '1',
    workOutName: 'Full Body Cardio Advance',
    totalExercises: '19',
    totalTimes: '20',
    image: IMAGES.absIntermediate,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/FullBodyCadio%2FfullBodyCadioIntermediate.mp4?alt=media&token=2b09517e-1985-41cf-a6d9-91e183099f74',
    exercises: [
      {
        name: 'Side Hop',
        image: '',
        duration: 'x14',
        introduction: 'Stand on the floor. Put your hands in front of you and hop from side to side.',
      },
      {
        name: 'Side Arm Raises',
        image: '',
        duration: 'x14',
        introduction:
          'Stand with your arms at your sides. Raise your arms to your sides at shoulder height, then put them down. Repeat the movement.',
      },
      {
        name: 'Staggered Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start in the regular push-up position with one hand in front of the other. Do a push-up and switch the other hand in front.',
      },
      {
        name: 'Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms.',
      },
      {
        name: 'Shoulder Gators',
        image: '',
        duration: 'x12',
        introduction:
          'Stand upright with your hands beside your ears and elbows facing out. Rotate your elbows until they are facing the front.',
      },
      {
        name: 'Mountain Climber',
        image: '',
        duration: 'x14',
        introduction:
          'Start in the push-up position. Bend your right knee towards your chest and keep your left leg straight, then quickly switch legs.',
      },
      {
        name: 'Diamond Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Start in the push-up position. Form a diamond with your forefingers and thumbs under your chest. Push your body up and down while keeping your body straight.',
      },
      {
        name: 'Arm Curls Crunch Left',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your left side with knees bent. Grasp your left thigh and place your right hand behind your head. Raise your upper body by pulling your left thigh.',
      },
      {
        name: 'Arm Curls Crunch Right',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your right side with knees bent. Grasp your right thigh and place your left hand behind your head. Raise your upper body by pulling your right thigh.',
      },
      {
        name: 'Jumping Squats',
        image: '',
        duration: 'x12',
        introduction: 'Start in the squat position. Jump up using your abdominal muscles for strength.',
      },
      {
        name: 'Russian Twist',
        image: '',
        duration: 'x14',
        introduction: 'Sit with knees bent and feet lifted. Tilt your back and twist your hands from side to side.',
      },
      {
        name: 'Decline Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start on all fours with feet elevated on a chair or bench. Push your body up and down using your arms while keeping your body straight.',
      },
      {
        name: 'Curtsy Lunges',
        image: '',
        duration: 'x12',
        introduction:
          'Stand straight. Step back with your left leg to the right while bending your knees. Return and switch sides.',
      },
      {
        name: 'Leg Raises',
        image: '',
        duration: 'x14',
        introduction:
          'Lie on your back with hands beneath your hips for support. Lift your legs to form a right angle with the floor and lower them slowly.',
      },
      {
        name: 'Donkey Kicks Right',
        image: '',
        duration: 'x12',
        introduction: 'Start on all fours. Lift your right leg and squeeze your glutes, then return to start.',
      },
      {
        name: 'Donkey Kicks Left',
        image: '',
        duration: 'x12',
        introduction: 'Start on all fours. Lift your left leg and squeeze your glutes, then return to start.',
      },
      {
        name: 'Push-Up & Rotation',
        image: '',
        duration: 'x10',
        introduction:
          'Start in the push-up position. After pushing up, rotate your upper body and extend one arm upwards. Alternate sides.',
      },
      {
        name: 'Crossover Crunch',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your back with knees bent. Raise and twist your torso to bring your right elbow to your left knee. Alternate sides.',
      },
      {
        name: 'Bottom Leg Lift Right',
        image: '',
        duration: 'x14',
        introduction:
          'Lie on your right side. Place your left foot forward on the floor and lift your right leg up and down.',
      },
      {
        name: 'Bottom Leg Lift Left',
        image: '',
        duration: 'x14',
        introduction:
          'Lie on your left side. Place your right foot forward on the floor and lift your left leg up and down.',
      },
      {
        name: 'Glute Kick Back Left',
        image: '',
        duration: 'x12',
        introduction: 'Start on all fours. Kick your left leg back until it is parallel with the ground.',
      },
      {
        name: 'Glute Kick Back Right',
        image: '',
        duration: 'x12',
        introduction: 'Start on all fours. Kick your right leg back until it is parallel with the ground.',
      },
      {
        name: 'Triceps Dips',
        image: '',
        duration: 'x12',
        introduction:
          'Sit on a chair and move your hip off the chair with your hands holding the edge. Slowly bend and stretch your arms to move up and down.',
      },
      {
        name: 'Side Bridges Right',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your left side with your left elbow under your shoulder. Raise your hips upward and hold for 2-4 seconds, then return.',
      },
      {
        name: 'Side Bridges Left',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your right side with your right elbow under your shoulder. Raise your hips upward and hold for 2-4 seconds, then return.',
      },
    ],
  },
  {
    id: '2',
    workOutName: 'Leg Advance',
    totalExercises: '12',
    totalTimes: '7',
    image: IMAGES.legAdvance,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Leg%2FLegExpert.MOV?alt=media&token=19e33883-f19e-4859-b8c0-b804bd82bfab',
    exercises: [
      {
        name: 'Wall Calf Raises',
        image: '',
        duration: 'x12',
        introduction:
          'Stand straight with your hands on the wall and feet shoulder width apart. Lift your heels and stand on your toes, then drop your heels down.',
      },
      {
        name: 'Left Quad Stretch With Wall',
        image: '',
        duration: 'x1',
        introduction:
          'Stand with your right hand on the wall. Bend your left leg and grasp your ankle or toes to bring your left calf close to your left thigh. Hold this position.',
      },
      {
        name: 'Right Quad Stretch With Wall',
        image: '',
        duration: 'x1',
        introduction:
          'Stand with your left hand on the wall. Bend your right leg and grasp your ankle or toes to bring your right calf close to your right thigh. Hold this position.',
      },
      {
        name: 'Backward Lunge',
        image: '',
        duration: 'x12',
        introduction:
          'Stand with your feet shoulder width apart and hands on your hips. Step a big step backward with your right leg and lower your body until your left thigh is parallel to the floor. Return and repeat with other side.',
      },
      {
        name: 'Sumo Squat',
        image: '',
        duration: 'x15',
        introduction:
          'Stand with your feet 6-12 inches apart. Stretch your arms in front of you, lower your body until your thighs are parallel to the floor, then return to the starting position.',
      },
      {
        name: 'Wall Sit',
        image: '',
        duration: 'x1',
        introduction:
          'Start with your back against the wall. Slide down until your knees are at a 90 degree angle. Keep your back against the wall and hold the position.',
      },
      {
        name: 'Hindu Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Start with your hands and feet touching the floor, body bent and butt up in a V shape. Bend your elbows to bring your body towards the floor and raise your upper body up as far as possible, then return to the original position.',
      },
      {
        name: 'Side Leg Circles Left',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your right side with your head resting on your right hand. Lift your left leg and rotate your foot in circles.',
      },
      {
        name: 'Side Leg Circles Right',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your left side with your head resting on your left hand. Lift your right leg and rotate your foot in circles.',
      },
      {
        name: 'Crossover Crunch',
        image: '',
        duration: 'x15',
        introduction:
          'Lie on your back with your knees bent and hands behind your ears. Raise and twist your torso so your right elbow moves to meet your left knee. Repeat with the other side.',
      },
      {
        name: 'Inchworms',
        image: '',
        duration: 'x10',
        introduction:
          'Start with your feet shoulder width apart. Bend your body and walk your hands in front of you as far as you can, then walk your hands back.',
      },
      {
        name: 'Butt Bridge',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your back with knees bent and feet flat on the floor. Put your arms flat at your sides, then lift your butt up and down.',
      },
    ],
  },
  {
    id: '3',
    workOutName: 'Arm Advance',
    totalExercises: '20',
    totalTimes: '20',
    image: IMAGES.armIntermediate,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/Arm%2FarmExpert.MOV?alt=media&token=835fde2d-1dc1-4c60-84e2-3cc21fcaa146',
    exercises: [
      {
        name: 'Side Arm Raises',
        image: '',
        duration: 'x14',
        introduction:
          'Stand with your arms at your sides. Raise your arms to your sides at shoulder height, then put them down. Repeat the movement.',
      },
      {
        name: 'Shoulder Stretch',
        image: '',
        duration: 'x10',
        introduction:
          'Place one arm across your body parallel to the ground. Use the other arm to pull the parallel arm toward your chest. Hold for a while. Switch arms and repeat. Keep the inside arm straight during the exercise.',
      },
      {
        name: 'Diagonal Plank',
        image: '',
        duration: 'x12',
        introduction:
          'Start in the straight arm plank position. Lift your right arm and left leg until they are parallel with the ground. Return to the start position and repeat with the other side.',
      },
      {
        name: 'Heel Touch',
        image: '',
        duration: 'x16',
        introduction:
          'Lie on the ground with your legs bent and your arms by your sides. Slightly lift your upper body off the floor and make your hands alternately reach your heels.',
      },
      {
        name: 'Hindu Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start with your hands and feet touching the floor in an upside-down V shape. Bend your elbows to bring your body towards the floor, then raise your upper body up as far as possible. Return to the original position and repeat.',
      },
      {
        name: 'Staggered Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start in the regular push-up position with one hand in front of the other. Do a push-up and switch the other hand in front. Keep your body straight.',
      },
      {
        name: 'Punches',
        image: '',
        duration: 'x20',
        introduction:
          'Stand with one leg forward and knees slightly bent. Bend your elbows, clench your fists, and extend one arm forward. Alternate with the other arm.',
      },
      {
        name: 'Knee Push Ups',
        image: '',
        duration: 'x14',
        introduction:
          'Start in a push-up position with knees touching the floor and feet raised. Push your body up and down.',
      },
      {
        name: 'Hover Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start in a push-up position. Lower yourself, shift your body to the left, then to the right, and push your body up. Repeat.',
      },
      {
        name: 'Push-Up & Rotation',
        image: '',
        duration: 'x12',
        introduction:
          'Start in a push-up position. Perform a push-up, and as you come up, rotate your upper body and extend one arm upwards. Repeat with the other arm.',
      },
      {
        name: 'Skipping Without Rope',
        image: '',
        duration: 'x30 seconds',
        introduction:
          'Pretend to hold a skipping rope. Jump and alternately land on the balls of your feet while rotating your wrists as if spinning a rope.',
      },
      {
        name: 'Plank',
        image: '',
        duration: 'x30 seconds',
        introduction:
          'Lie on the floor with your toes and forearms on the ground. Keep your body straight and hold this position as long as you can.',
      },
      {
        name: 'Decline Push Ups',
        image: '',
        duration: 'x12',
        introduction:
          'Start on all fours with your feet elevated on a chair or bench. Push your body up and down, using your arms for strength.',
      },
      {
        name: 'Side Bridges Right',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your left side with your left elbow under your shoulder and right hand on your waist. Raise your hips upward, hold, and then return to the start.',
      },
      {
        name: 'Side Bridges Left',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your right side with your right elbow under your shoulder and left hand on your waist. Raise your hips upward, hold, and then return to the start.',
      },
      {
        name: 'Swimmer And Superman',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your stomach with your arms extended overhead. Alternately lift your opposite arm and leg.',
      },
      {
        name: 'Prone Triceps Push Ups',
        image: '',
        duration: 'x10',
        introduction:
          'Lie on your stomach with your hands under your shoulders and elbows bent. Slightly raise your chest and then return to the start position.',
      },
      {
        name: 'Triceps Kickbacks',
        image: '',
        duration: 'x12',
        introduction:
          'Lean forward with bent knees and elbows. Extend your arms behind you and squeeze your triceps, making them parallel to the ground when extended.',
      },
      {
        name: 'Arm Curls Crunch Left',
        image: '',
        duration: 'x12',
        introduction:
          'Lie on your left side with your knees bent and lifted. Grasp your left thigh with your left hand and raise your upper body by pulling your left thigh.',
      },
      {
        name: 'Burpees',
        image: '',
        duration: 'x10',
        introduction:
          'Stand with feet shoulder-width apart. Place your hands on the ground, kick your feet backward, perform a quick push-up, and then jump up.',
      },
      {
        name: 'Jumping Squats',
        image: '',
        duration: 'x12',
        introduction: 'Start in a squat position, then jump up using your abdominal muscles for strength.',
      },
    ],
  },

  {
    id: 5,
    workOutName: 'Push Ups Advance',
    totalExercises: '5',
    totalTimes: '7',
    image: IMAGES.chestBeginner,
    video:
      'https://firebasestorage.googleapis.com/v0/b/homeworkout-5acc0.appspot.com/o/pushUp%2FpuchUpadvance.mp4?alt=media&token=32300495-dc0e-4325-bbd2-dcbafdf17680',
    exercises: [
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x4',
        duration: 'x4',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x3',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
      {
        name: 'Push Ups',
        image: 'x3',
        duration: 'x3',
        introduction:
          ' Lay prone on the ground with arms supporting your body. Keep your body straight while raising and lowering your body with your arms',
      },
    ],
  },
];

export const countryStates = [
  {
    title: 'Alabama',
    code: 1,
    id: 1,
  },
  {
    title: 'Alaska',
    code: 1,
    id: 2,
  },
  {
    title: 'American Samoa',
    code: 1,
    id: 3,
  },
  {
    title: 'Arizona',
    code: 1,
    id: 4,
  },
  {
    title: 'Arkansas',
    code: 1,
    id: 5,
  },
  {
    title: 'California',
    code: 1,
    id: 6,
  },
  {
    title: 'Colorado',
    code: 1,
    id: 7,
  },
  {
    title: 'Connecticut',
    code: 1,
    id: 8,
  },
  {
    title: 'Delaware',
    code: 1,
    id: 9,
  },
  {
    title: 'District Of Columbia',
    code: 1,
    id: 10,
  },
  {
    title: 'Federated States Of Micronesia',
    code: 1,
    id: 11,
  },
  {
    title: 'Florida',
    code: 1,
    id: 12,
  },
  {
    title: 'Georgia',
    code: 1,
    id: 13,
  },
  {
    title: 'Guam',
    code: 1,
    id: 14,
  },
  {
    title: 'Hawaii',
    code: 1,
    id: 15,
  },
  {
    title: 'Idaho',
    code: 1,
    id: 16,
  },
  {
    title: 'Illinois',
    code: 1,
    id: 17,
  },
  {
    title: 'Indiana',
    code: 1,
    id: 18,
  },
  {
    title: 'Iowa',
    code: 1,
    id: 19,
  },
  {
    title: 'Kansas',
    code: 1,
    id: 20,
  },
  {
    title: 'Kentucky',
    code: 1,
    id: 21,
  },
  {
    title: 'Louisiana',
    code: 1,
    id: 22,
  },
  {
    title: 'Maine',
    code: 1,
    id: 23,
  },
  {
    title: 'Marshall Islands',
    code: 1,
    id: 24,
  },
  {
    title: 'Maryland',
    code: 1,
    id: 25,
  },
  {
    title: 'Massachusetts',
    code: 1,
    id: 26,
  },
  {
    title: 'Michigan',
    code: 1,
    id: 27,
  },
  {
    title: 'Minnesota',
    code: 1,
    id: 28,
  },
  {
    title: 'Mississippi',
    code: 1,
    id: 29,
  },
  {
    title: 'Missouri',
    code: 1,
    id: 30,
  },
  {
    title: 'Montana',
    code: 1,
    id: 31,
  },
  {
    title: 'Nebraska',
    code: 1,
    id: 32,
  },
  {
    title: 'Nevada',
    code: 1,
    id: 33,
  },
  {
    title: 'New Hampshire',
    code: 1,
    id: 34,
  },
  {
    title: 'New Jersey',
    code: 1,
    id: 35,
  },
  {
    title: 'New Mexico',
    code: 1,
    id: 36,
  },
  {
    title: 'New York',
    code: 1,
    id: 37,
  },
  {
    title: 'North Carolina',
    code: 1,
    id: 39,
  },
  {
    title: 'North Dakota',
    code: 1,
    id: 40,
  },
  {
    title: 'Northern Mariana Islands',
    code: 1,
    id: 41,
  },
  {
    title: 'Ohio',
    code: 1,
    id: 42,
  },
  {
    title: 'Oklahoma',
    code: 1,
    id: 43,
  },
  {
    title: 'Oregon',
    code: 1,
    id: 44,
  },
  {
    title: 'Palau',
    code: 1,
    id: 45,
  },
  {
    title: 'Pennsylvania',
    code: 1,
    id: 46,
  },
  {
    title: 'Puerto Rico',
    code: 1,
    id: 47,
  },
  {
    title: 'Rhode Island',
    code: 1,
    id: 48,
  },
  {
    title: 'South Carolina',
    code: 1,
    id: 49,
  },
  {
    title: 'South Dakota',
    code: 1,
    id: 50,
  },
  {
    title: 'Tennessee',
    code: 1,
    id: 51,
  },
  {
    title: 'Texas',
    code: 1,
    id: 52,
  },
  {
    title: 'Utah',
    code: 1,
    id: 53,
  },
  {
    title: 'Vermont',
    code: 1,
    id: 54,
  },
  {
    title: 'Virgin Islands',
    code: 1,
    id: 55,
  },
  {
    title: 'Virginia',
    code: 1,
    id: 56,
  },
  {
    title: 'Washington',
    code: 1,
    id: 57,
  },
  {
    title: 'West Virginia',
    code: 1,
    id: 58,
  },
  {
    title: 'Wisconsin',
    code: 1,
    id: 59,
  },
  {
    title: 'Wyoming',
    code: 1,
    id: 60,
  },
];

export const countriesData = [
  {
    countryName: 'Afghanistan',
    countryDialCode: '+93',
    emoji: '🇦🇫',
    code: 'AF',
  },
  {
    countryName: 'Aland Islands',
    countryDialCode: '+358',
    emoji: '🇦🇽',
    code: 'AX',
  },
  {
    countryName: 'Albania',
    countryDialCode: '+355',
    emoji: '🇦🇱',
    code: 'AL',
  },
  {
    countryName: 'Algeria',
    countryDialCode: '+213',
    emoji: '🇩🇿',
    code: 'DZ',
  },
  {
    countryName: 'AmericanSamoa',
    countryDialCode: '+1684',
    emoji: '🇦🇸',
    code: 'AS',
  },
  {
    countryName: 'Andorra',
    countryDialCode: '+376',
    emoji: '🇦🇩',
    code: 'AD',
  },
  {
    countryName: 'Angola',
    countryDialCode: '+244',
    emoji: '🇦🇴',
    code: 'AO',
  },
  {
    countryName: 'Anguilla',
    countryDialCode: '+1264',
    emoji: '🇦🇮',
    code: 'AI',
  },
  {
    countryName: 'Antarctica',
    countryDialCode: '+672',
    emoji: '🇦🇶',
    code: 'AQ',
  },
  {
    countryName: 'Antigua and Barbuda',
    countryDialCode: '+1268',
    emoji: '🇦🇬',
    code: 'AG',
  },
  {
    countryName: 'Argentina',
    countryDialCode: '+54',
    emoji: '🇦🇷',
    code: 'AR',
  },
  {
    countryName: 'Armenia',
    countryDialCode: '+374',
    emoji: '🇦🇲',
    code: 'AM',
  },
  {
    countryName: 'Aruba',
    countryDialCode: '+297',
    emoji: '🇦🇼',
    code: 'AW',
  },
  {
    countryName: 'Australia',
    countryDialCode: '+61',
    emoji: '🇦🇺',
    code: 'AU',
  },
  {
    countryName: 'Austria',
    countryDialCode: '+43',
    emoji: '🇦🇹',
    code: 'AT',
  },
  {
    countryName: 'Azerbaijan',
    countryDialCode: '+994',
    emoji: '🇦🇿',
    code: 'AZ',
  },
  {
    countryName: 'Bahamas',
    countryDialCode: '+1242',
    emoji: '🇧🇸',
    code: 'BS',
  },
  {
    countryName: 'Bahrain',
    countryDialCode: '+973',
    emoji: '🇧🇭',
    code: 'BH',
  },
  {
    countryName: 'Bangladesh',
    countryDialCode: '+880',
    emoji: '🇧🇩',
    code: 'BD',
  },
  {
    countryName: 'Barbados',
    countryDialCode: '+1246',
    emoji: '🇧🇧',
    code: 'BB',
  },
  {
    countryName: 'Belarus',
    countryDialCode: '+375',
    emoji: '🇧🇾',
    code: 'BY',
  },
  {
    countryName: 'Belgium',
    countryDialCode: '+32',
    emoji: '🇧🇪',
    code: 'BE',
  },
  {
    countryName: 'Belize',
    countryDialCode: '+501',
    emoji: '🇧🇿',
    code: 'BZ',
  },
  {
    countryName: 'Benin',
    countryDialCode: '+229',
    emoji: '🇧🇯',
    code: 'BJ',
  },
  {
    countryName: 'Bermuda',
    countryDialCode: '+1441',
    emoji: '🇧🇲',
    code: 'BM',
  },
  {
    countryName: 'Bhutan',
    countryDialCode: '+975',
    emoji: '🇧🇹',
    code: 'BT',
  },
  {
    countryName: 'Bolivia, Plurinational State of',
    countryDialCode: '+591',
    emoji: '🇧🇴',
    code: 'BO',
  },
  {
    countryName: 'Bosnia and Herzegovina',
    countryDialCode: '+387',
    emoji: '🇧🇦',
    code: 'BA',
  },
  {
    countryName: 'Botswana',
    countryDialCode: '+267',
    emoji: '🇧🇼',
    code: 'BW',
  },
  {
    countryName: 'Brazil',
    countryDialCode: '+55',
    emoji: '🇧🇷',
    code: 'BR',
  },
  {
    countryName: 'British Indian Ocean Territory',
    countryDialCode: '+246',
    emoji: '🇮🇴',
    code: 'IO',
  },
  {
    countryName: 'Brunei Darussalam',
    countryDialCode: '+673',
    emoji: '🇧🇳',
    code: 'BN',
  },
  {
    countryName: 'Bulgaria',
    countryDialCode: '+359',
    emoji: '🇧🇬',
    code: 'BG',
  },
  {
    countryName: 'Burkina Faso',
    countryDialCode: '+226',
    emoji: '🇧🇫',
    code: 'BF',
  },
  {
    countryName: 'Burundi',
    countryDialCode: '+257',
    emoji: '🇧🇮',
    code: 'BI',
  },
  {
    countryName: 'Cambodia',
    countryDialCode: '+855',
    emoji: '🇰🇭',
    code: 'KH',
  },
  {
    countryName: 'Cameroon',
    countryDialCode: '+237',
    emoji: '🇨🇲',
    code: 'CM',
  },
  {
    countryName: 'Canada',
    countryDialCode: '+1',
    emoji: '🇨🇦',
    code: 'CA',
  },
  {
    countryName: 'Cape Verde',
    countryDialCode: '+238',
    emoji: '🇨🇻',
    code: 'CV',
  },
  {
    countryName: 'Cayman Islands',
    countryDialCode: '+345',
    emoji: '🇰🇾',
    code: 'KY',
  },
  {
    countryName: 'Central African Republic',
    countryDialCode: '+236',
    emoji: '🇨🇫',
    code: 'CF',
  },
  {
    countryName: 'Chad',
    countryDialCode: '+235',
    emoji: '🇹🇩',
    code: 'TD',
  },
  {
    countryName: 'Chile',
    countryDialCode: '+56',
    emoji: '🇨🇱',
    code: 'CL',
  },
  {
    countryName: 'China',
    countryDialCode: '+86',
    emoji: '🇨🇳',
    code: 'CN',
  },
  {
    countryName: 'Christmas Island',
    countryDialCode: '+61',
    emoji: '🇨🇽',
    code: 'CX',
  },
  {
    countryName: 'Cocos (Keeling) Islands',
    countryDialCode: '+61',
    emoji: '🇨🇨',
    code: 'CC',
  },
  {
    countryName: 'Colombia',
    countryDialCode: '+57',
    emoji: '🇨🇴',
    code: 'CO',
  },
  {
    countryName: 'Comoros',
    countryDialCode: '+269',
    emoji: '🇰🇲',
    code: 'KM',
  },
  {
    countryName: 'Congo',
    countryDialCode: '+242',
    emoji: '🇨🇬',
    code: 'CG',
  },
  {
    countryName: 'Congo, The Democratic Republic of the Congo',
    countryDialCode: '+243',
    emoji: '🇨🇩',
    code: 'CD',
  },
  {
    countryName: 'Cook Islands',
    countryDialCode: '+682',
    emoji: '🇨🇰',
    code: 'CK',
  },
  {
    countryName: 'Costa Rica',
    countryDialCode: '+506',
    emoji: '🇨🇷',
    code: 'CR',
  },
  {
    countryName: "Cote d'Ivoire",
    countryDialCode: '+225',
    emoji: '🇨🇮',
    code: 'CI',
  },
  {
    countryName: 'Croatia',
    countryDialCode: '+385',
    emoji: '🇭🇷',
    code: 'HR',
  },
  {
    countryName: 'Cuba',
    countryDialCode: '+53',
    emoji: '🇨🇺',
    code: 'CU',
  },
  {
    countryName: 'Cyprus',
    countryDialCode: '+357',
    emoji: '🇨🇾',
    code: 'CY',
  },
  {
    countryName: 'Czech Republic',
    countryDialCode: '+420',
    emoji: '🇨🇿',
    code: 'CZ',
  },
  {
    countryName: 'Denmark',
    countryDialCode: '+45',
    emoji: '🇩🇰',
    code: 'DK',
  },
  {
    countryName: 'Djibouti',
    countryDialCode: '+253',
    emoji: '🇩🇯',
    code: 'DJ',
  },
  {
    countryName: 'Dominica',
    countryDialCode: '+1767',
    emoji: '🇩🇲',
    code: 'DM',
  },
  {
    countryName: 'Dominican Republic',
    countryDialCode: '+1849',
    emoji: '🇩🇴',
    code: 'DO',
  },
  {
    countryName: 'Ecuador',
    countryDialCode: '+593',
    emoji: '🇪🇨',
    code: 'EC',
  },
  {
    countryName: 'Egypt',
    countryDialCode: '+20',
    emoji: '🇪🇬',
    code: 'EG',
  },
  {
    countryName: 'El Salvador',
    countryDialCode: '+503',
    emoji: '🇸🇻',
    code: 'SV',
  },
  {
    countryName: 'Equatorial Guinea',
    countryDialCode: '+240',
    emoji: '🇬🇶',
    code: 'GQ',
  },
  {
    countryName: 'Eritrea',
    countryDialCode: '+291',
    emoji: '🇪🇷',
    code: 'ER',
  },
  {
    countryName: 'Estonia',
    countryDialCode: '+372',
    emoji: '🇪🇪',
    code: 'EE',
  },
  {
    countryName: 'Ethiopia',
    countryDialCode: '+251',
    emoji: '🇪🇹',
    code: 'ET',
  },
  {
    countryName: 'Falkland Islands (Malvinas)',
    countryDialCode: '+500',
    emoji: '🇫🇰',
    code: 'FK',
  },
  {
    countryName: 'Faroe Islands',
    countryDialCode: '+298',
    emoji: '🇫🇴',
    code: 'FO',
  },
  {
    countryName: 'Fiji',
    countryDialCode: '+679',
    emoji: '🇫🇯',
    code: 'FJ',
  },
  {
    countryName: 'Finland',
    countryDialCode: '+358',
    emoji: '🇫🇮',
    code: 'FI',
  },
  {
    countryName: 'France',
    countryDialCode: '+33',
    emoji: '🇫🇷',
    code: 'FR',
  },
  {
    countryName: 'French Guiana',
    countryDialCode: '+594',
    emoji: '🇬🇫',
    code: 'GF',
  },
  {
    countryName: 'French Polynesia',
    countryDialCode: '+689',
    emoji: '🇵🇫',
    code: 'PF',
  },
  {
    countryName: 'Gabon',
    countryDialCode: '+241',
    emoji: '🇬🇦',
    code: 'GA',
  },
  {
    countryName: 'Gambia',
    countryDialCode: '+220',
    emoji: '🇬🇲',
    code: 'GM',
  },
  {
    countryName: 'Georgia',
    countryDialCode: '+995',
    emoji: '🇬🇪',
    code: 'GE',
  },
  {
    countryName: 'Germany',
    countryDialCode: '+49',
    emoji: '🇩🇪',
    code: 'DE',
  },
  {
    countryName: 'Ghana',
    countryDialCode: '+233',
    emoji: '🇬🇭',
    code: 'GH',
  },
  {
    countryName: 'Gibraltar',
    countryDialCode: '+350',
    emoji: '🇬🇮',
    code: 'GI',
  },
  {
    countryName: 'Greece',
    countryDialCode: '+30',
    emoji: '🇬🇷',
    code: 'GR',
  },
  {
    countryName: 'Greenland',
    countryDialCode: '+299',
    emoji: '🇬🇱',
    code: 'GL',
  },
  {
    countryName: 'Grenada',
    countryDialCode: '+1473',
    emoji: '🇬🇩',
    code: 'GD',
  },
  {
    countryName: 'Guadeloupe',
    countryDialCode: '+590',
    emoji: '🇬🇵',
    code: 'GP',
  },
  {
    countryName: 'Guam',
    countryDialCode: '+1671',
    emoji: '🇬🇺',
    code: 'GU',
  },
  {
    countryName: 'Guatemala',
    countryDialCode: '+502',
    emoji: '🇬🇹',
    code: 'GT',
  },
  {
    countryName: 'Guernsey',
    countryDialCode: '+44',
    emoji: '🇬🇬',
    code: 'GG',
  },
  {
    countryName: 'Guinea',
    countryDialCode: '+224',
    emoji: '🇬🇳',
    code: 'GN',
  },
  {
    countryName: 'Guinea-Bissau',
    countryDialCode: '+245',
    emoji: '🇬🇼',
    code: 'GW',
  },
  {
    countryName: 'Guyana',
    countryDialCode: '+595',
    emoji: '🇬🇾',
    code: 'GY',
  },
  {
    countryName: 'Haiti',
    countryDialCode: '+509',
    emoji: '🇭🇹',
    code: 'HT',
  },
  {
    countryName: 'Holy See (Vatican City State)',
    countryDialCode: '+379',
    emoji: '🇻🇦',
    code: 'VA',
  },
  {
    countryName: 'Honduras',
    countryDialCode: '+504',
    emoji: '🇭🇳',
    code: 'HN',
  },
  {
    countryName: 'Hong Kong',
    countryDialCode: '+852',
    emoji: '🇭🇰',
    code: 'HK',
  },
  {
    countryName: 'Hungary',
    countryDialCode: '+36',
    emoji: '🇭🇺',
    code: 'HU',
  },
  {
    countryName: 'Iceland',
    countryDialCode: '+354',
    emoji: '🇮🇸',
    code: 'IS',
  },
  {
    countryName: 'India',
    countryDialCode: '+91',
    emoji: '🇮🇳',
    code: 'IN',
  },
  {
    countryName: 'Indonesia',
    countryDialCode: '+62',
    emoji: '🇮🇩',
    code: 'ID',
  },
  {
    countryName: 'Iran, Islamic Republic of Persian Gulf',
    countryDialCode: '+98',
    emoji: '🇮🇷',
    code: 'IR',
  },
  {
    countryName: 'Iraq',
    countryDialCode: '+964',
    emoji: '🇮🇷',
    code: 'IQ',
  },
  {
    countryName: 'Ireland',
    countryDialCode: '+353',
    emoji: '🇮🇪',
    code: 'IE',
  },
  {
    countryName: 'Isle of Man',
    countryDialCode: '+44',
    emoji: '🇮🇲',
    code: 'IM',
  },
  {
    countryName: 'Israel',
    countryDialCode: '+972',
    emoji: '🇮🇱',
    code: 'IL',
  },
  {
    countryName: 'Italy',
    countryDialCode: '+39',
    emoji: '🇮🇹',
    code: 'IT',
  },
  {
    countryName: 'Jamaica',
    countryDialCode: '+1876',
    emoji: '🇯🇲',
    code: 'JM',
  },
  {
    countryName: 'Japan',
    countryDialCode: '+81',
    emoji: '🇯🇵',
    code: 'JP',
  },
  {
    countryName: 'Jersey',
    countryDialCode: '+44',
    emoji: '🇯🇪',
    code: 'JE',
  },
  {
    countryName: 'Jordan',
    countryDialCode: '+962',
    emoji: '🇯🇴',
    code: 'JO',
  },
  {
    countryName: 'Kazakhstan',
    countryDialCode: '+77',
    emoji: '🇰🇿',
    code: 'KZ',
  },
  {
    countryName: 'Kenya',
    countryDialCode: '+254',
    emoji: '🇰🇪',
    code: 'KE',
  },
  {
    countryName: 'Kiribati',
    countryDialCode: '+686',
    emoji: '🇰🇮',
    code: 'KI',
  },
  {
    countryName: "Korea, Democratic People's Republic of Korea",
    countryDialCode: '+850',
    emoji: '🇰🇵',
    code: 'KP',
  },
  {
    countryName: 'Korea, Republic of South Korea',
    countryDialCode: '+82',
    emoji: '🇰🇷',
    code: 'KR',
  },
  {
    countryName: 'Kuwait',
    countryDialCode: '+965',
    emoji: '🇰🇼',
    code: 'KW',
  },
  {
    countryName: 'Kyrgyzstan',
    countryDialCode: '+996',
    emoji: '🇰🇬',
    code: 'KG',
  },
  {
    countryName: 'Laos',
    countryDialCode: '+856',
    emoji: '🇱🇦',
    code: 'LA',
  },
  {
    countryName: 'Latvia',
    countryDialCode: '+371',
    emoji: '🇱🇻',
    code: 'LV',
  },
  {
    countryName: 'Lebanon',
    countryDialCode: '+961',
    emoji: '🇱🇧',
    code: 'LB',
  },
  {
    countryName: 'Lesotho',
    countryDialCode: '+266',
    emoji: '🇱🇸',
    code: 'LS',
  },
  {
    countryName: 'Liberia',
    countryDialCode: '+231',
    emoji: '🇱🇷',
    code: 'LR',
  },
  {
    countryName: 'Libyan Arab Jamahiriya',
    countryDialCode: '+218',
    emoji: '🇱🇾',
    code: 'LY',
  },
  {
    countryName: 'Liechtenstein',
    countryDialCode: '+423',
    emoji: '🇱🇮',
    code: 'LI',
  },
  {
    countryName: 'Lithuania',
    countryDialCode: '+370',
    emoji: '🇱🇹',
    code: 'LT',
  },
  {
    countryName: 'Luxembourg',
    countryDialCode: '+352',
    emoji: '🇱🇺',
    code: 'LU',
  },
  {
    countryName: 'Macao',
    countryDialCode: '+853',
    emoji: '🇲🇴',
    code: 'MO',
  },
  {
    countryName: 'Macedonia',
    countryDialCode: '+389',
    emoji: '🇲🇰',
    code: 'MK',
  },
  {
    countryName: 'Madagascar',
    countryDialCode: '+261',
    emoji: '🇲🇬',
    code: 'MG',
  },
  {
    countryName: 'Malawi',
    countryDialCode: '+265',
    emoji: '🇲🇼',
    code: 'MW',
  },
  {
    countryName: 'Malaysia',
    countryDialCode: '+60',
    emoji: '🇲🇾',
    code: 'MY',
  },
  {
    countryName: 'Maldives',
    countryDialCode: '+960',
    emoji: '🇲🇻',
    code: 'MV',
  },
  {
    countryName: 'Mali',
    countryDialCode: '+223',
    emoji: '🇲🇱',
    code: 'ML',
  },
  {
    countryName: 'Malta',
    countryDialCode: '+356',
    emoji: '🇲🇹',
    code: 'MT',
  },
  {
    countryName: 'Marshall Islands',
    countryDialCode: '+692',
    emoji: '🇲🇭',
    code: 'MH',
  },
  {
    countryName: 'Martinique',
    countryDialCode: '+596',
    emoji: '🇲🇶',
    code: 'MQ',
  },
  {
    countryName: 'Mauritania',
    countryDialCode: '+222',
    emoji: '🇲🇷',
    code: 'MR',
  },
  {
    countryName: 'Mauritius',
    countryDialCode: '+230',
    emoji: '🇲🇺',
    code: 'MU',
  },
  {
    countryName: 'Mayotte',
    countryDialCode: '+262',
    emoji: '🇾🇹',
    code: 'YT',
  },
  {
    countryName: 'Mexico',
    countryDialCode: '+52',
    emoji: '🇲🇽',
    code: 'MX',
  },
  {
    countryName: 'Micronesia, Federated States of Micronesia',
    countryDialCode: '+691',
    emoji: '🇫🇲',
    code: 'FM',
  },
  {
    countryName: 'Moldova',
    countryDialCode: '+373',
    emoji: '🇲🇩',
    code: 'MD',
  },
  {
    countryName: 'Monaco',
    countryDialCode: '+377',
    emoji: '🇲🇨',
    code: 'MC',
  },
  {
    countryName: 'Mongolia',
    countryDialCode: '+976',
    emoji: '🇲🇳',
    code: 'MN',
  },
  {
    countryName: 'Montenegro',
    countryDialCode: '+382',
    emoji: '🇲🇪',
    code: 'ME',
  },
  {
    countryName: 'Montserrat',
    countryDialCode: '+1664',
    emoji: '🇲🇸',
    code: 'MS',
  },
  {
    countryName: 'Morocco',
    countryDialCode: '+212',
    emoji: '🇲🇦',
    code: 'MA',
  },
  {
    countryName: 'Mozambique',
    countryDialCode: '+258',
    emoji: '🇲🇿',
    code: 'MZ',
  },
  {
    countryName: 'Myanmar',
    countryDialCode: '+95',
    emoji: '🇲🇲',
    code: 'MM',
  },
  {
    countryName: 'Namibia',
    emoji: '🇳🇦',
    countryDialCode: '+264',
    code: 'NA',
  },
  {
    countryName: 'Nauru',
    countryDialCode: '+674',
    emoji: '🇳🇷',
    code: 'NR',
  },
  {
    countryName: 'Nepal',
    countryDialCode: '+977',
    emoji: '🇳🇵',
    code: 'NP',
  },
  {
    countryName: 'Netherlands',
    countryDialCode: '+31',
    emoji: '🇳🇱',
    code: 'NL',
  },
  {
    countryName: 'Netherlands Antilles',
    countryDialCode: '+599',
    emoji: '🇧🇶',
    code: 'AN',
  },
  {
    countryName: 'New Caledonia',
    countryDialCode: '+687',
    emoji: '🇳🇨',
    code: 'NC',
  },
  {
    countryName: 'New Zealand',
    countryDialCode: '+64',
    emoji: '🇳🇿',
    code: 'NZ',
  },
  {
    countryName: 'Nicaragua',
    countryDialCode: '+505',
    emoji: '🇳🇮',
    code: 'NI',
  },
  {
    countryName: 'Niger',
    countryDialCode: '+227',
    emoji: '🇳🇪',
    code: 'NE',
  },
  {
    countryName: 'Nigeria',
    countryDialCode: '+234',
    emoji: '🇳🇬',
    code: 'NG',
  },
  {
    countryName: 'Niue',
    countryDialCode: '+683',
    emoji: '🇳🇺',
    code: 'NU',
  },
  {
    countryName: 'Norfolk Island',
    countryDialCode: '+672',
    emoji: '🇳🇫',
    code: 'NF',
  },
  {
    countryName: 'Northern Mariana Islands',
    countryDialCode: '+1670',
    emoji: '🇲🇵',
    code: 'MP',
  },
  {
    countryName: 'Norway',
    countryDialCode: '+47',
    emoji: '🇳🇴',
    code: 'NO',
  },
  {
    countryName: 'Oman',
    countryDialCode: '+968',
    emoji: '🇴🇲',
    code: 'OM',
  },
  {
    countryName: 'Pakistan',
    countryDialCode: '+92',
    emoji: '🇵🇰',
    code: 'PK',
  },
  {
    countryName: 'Palau',
    countryDialCode: '+680',
    emoji: '🇵🇼',
    code: 'PW',
  },
  {
    countryName: 'Palestinian Territory, Occupied',
    countryDialCode: '+970',
    emoji: '🇵🇸',
    code: 'PS',
  },
  {
    countryName: 'Panama',
    countryDialCode: '+507',
    emoji: '🇵🇦',
    code: 'PA',
  },
  {
    countryName: 'Papua New Guinea',
    countryDialCode: '+675',
    emoji: '🇵🇬',
    code: 'PG',
  },
  {
    countryName: 'Paraguay',
    countryDialCode: '+595',
    emoji: '🇵🇾',
    code: 'PY',
  },
  {
    countryName: 'Peru',
    countryDialCode: '+51',
    emoji: '🇵🇪',
    code: 'PE',
  },
  {
    countryName: 'Philippines',
    countryDialCode: '+63',
    emoji: '🇵🇭',
    code: 'PH',
  },
  {
    countryName: 'Pitcairn',
    countryDialCode: '+872',
    emoji: '🇵🇳',
    code: 'PN',
  },
  {
    countryName: 'Poland',
    countryDialCode: '+48',
    emoji: '🇵🇱',
    code: 'PL',
  },
  {
    countryName: 'Portugal',
    countryDialCode: '+351',
    emoji: '🇵🇹',
    code: 'PT',
  },
  {
    countryName: 'Puerto Rico',
    countryDialCode: '+1939',
    emoji: '🇵🇷',
    code: 'PR',
  },
  {
    countryName: 'Qatar',
    countryDialCode: '+974',
    emoji: '🇶🇦',
    code: 'QA',
  },
  {
    countryName: 'Romania',
    countryDialCode: '+40',
    emoji: '🇷🇴',
    code: 'RO',
  },
  {
    countryName: 'Russia',
    countryDialCode: '+7',
    emoji: '🇷🇺',
    code: 'RU',
  },
  {
    countryName: 'Rwanda',
    countryDialCode: '+250',
    emoji: '🇷🇼',
    code: 'RW',
  },
  {
    countryName: 'Reunion',
    countryDialCode: '+262',
    emoji: '🇷🇪',
    code: 'RE',
  },
  {
    countryName: 'Saint Barthelemy',
    countryDialCode: '+590',
    emoji: '🇧🇱',
    code: 'BL',
  },
  {
    countryName: 'Saint Helena, Ascension and Tristan Da Cunha',
    countryDialCode: '+290',
    emoji: '🇸🇭',
    code: 'SH',
  },
  {
    countryName: 'Saint Kitts and Nevis',
    countryDialCode: '+1869',
    emoji: '🇰🇳',
    code: 'KN',
  },
  {
    countryName: 'Saint Lucia',
    countryDialCode: '+1758',
    emoji: '🇱🇨',
    code: 'LC',
  },
  {
    countryName: 'Saint Martin',
    countryDialCode: '+590',
    emoji: '🇲🇫',
    code: 'MF',
  },
  {
    countryName: 'Saint Pierre and Miquelon',
    countryDialCode: '+508',
    emoji: '🇵🇲',
    code: 'PM',
  },
  {
    countryName: 'Saint Vincent and the Grenadines',
    countryDialCode: '+1784',
    emoji: '🇻🇨',
    code: 'VC',
  },
  {
    countryName: 'Samoa',
    countryDialCode: '+685',
    emoji: '🇼🇸',
    code: 'WS',
  },
  {
    countryName: 'San Marino',
    countryDialCode: '+378',
    emoji: '🇸🇲',
    code: 'SM',
  },
  {
    countryName: 'Sao Tome and Principe',
    countryDialCode: '+239',
    emoji: '🇸🇹',
    code: 'ST',
  },
  {
    countryName: 'Saudi Arabia',
    countryDialCode: '+966',
    emoji: '🇸🇦',
    code: 'SA',
  },
  {
    countryName: 'Senegal',
    countryDialCode: '+221',
    emoji: '🇸🇳',
    code: 'SN',
  },
  {
    countryName: 'Serbia',
    countryDialCode: '+381',
    emoji: '🇷🇸',
    code: 'RS',
  },
  {
    countryName: 'Seychelles',
    countryDialCode: '+248',
    emoji: '🇸🇨',
    code: 'SC',
  },
  {
    countryName: 'Sierra Leone',
    countryDialCode: '+232',
    emoji: '🇸🇱',
    code: 'SL',
  },
  {
    countryName: 'Singapore',
    countryDialCode: '+65',
    emoji: '🇸🇬',
    code: 'SG',
  },
  {
    countryName: 'Slovakia',
    countryDialCode: '+421',
    emoji: '🇸🇰',
    code: 'SK',
  },
  {
    countryName: 'Slovenia',
    countryDialCode: '+386',
    emoji: '🇸🇮',
    code: 'SI',
  },
  {
    countryName: 'Solomon Islands',
    countryDialCode: '+677',
    emoji: '🇸🇧',
    code: 'SB',
  },
  {
    countryName: 'Somalia',
    countryDialCode: '+252',
    emoji: '🇸🇴',
    code: 'SO',
  },
  {
    countryName: 'South Africa',
    countryDialCode: '+27',
    emoji: '🇿🇦',
    code: 'ZA',
  },
  {
    countryName: 'South Sudan',
    countryDialCode: '+211',
    emoji: '🇸🇸',
    code: 'SS',
  },
  {
    countryName: 'South Georgia and the South Sandwich Islands',
    countryDialCode: '+500',
    emoji: '🇬🇸',
    code: 'GS',
  },
  {
    countryName: 'Spain',
    countryDialCode: '+34',
    emoji: '🇪🇸',
    code: 'ES',
  },
  {
    countryName: 'Sri Lanka',
    countryDialCode: '+94',
    emoji: '🇱🇰',
    code: 'LK',
  },
  {
    countryName: 'Sudan',
    countryDialCode: '+249',
    emoji: '🇸🇩',
    code: 'SD',
  },
  {
    countryName: 'Suriname',
    countryDialCode: '+597',
    emoji: '🇸🇷',
    code: 'SR',
  },
  {
    countryName: 'Svalbard and Jan Mayen',
    countryDialCode: '+47',
    emoji: '🇸🇯',
    code: 'SJ',
  },
  {
    countryName: 'Swaziland',
    countryDialCode: '+268',
    emoji: '🇸🇿',
    code: 'SZ',
  },
  {
    countryName: 'Sweden',
    countryDialCode: '+46',
    emoji: '🇸🇪',
    code: 'SE',
  },
  {
    countryName: 'Switzerland',
    countryDialCode: '+41',
    emoji: '🇨🇭',
    code: 'CH',
  },
  {
    countryName: 'Syrian Arab Republic',
    countryDialCode: '+963',
    emoji: '🇸🇾',
    code: 'SY',
  },
  {
    countryName: 'Taiwan',
    countryDialCode: '+886',
    emoji: '🇹🇼',
    code: 'TW',
  },
  {
    countryName: 'Tajikistan',
    countryDialCode: '+992',
    emoji: '🇹🇯',
    code: 'TJ',
  },
  {
    countryName: 'Tanzania, United Republic of Tanzania',
    countryDialCode: '+255',
    emoji: '🇹🇿',
    code: 'TZ',
  },
  {
    countryName: 'Thailand',
    countryDialCode: '+66',
    emoji: '🇹🇭',
    code: 'TH',
  },
  {
    countryName: 'Timor-Leste',
    countryDialCode: '+670',
    emoji: '🇹🇱',
    code: 'TL',
  },
  {
    countryName: 'Togo',
    countryDialCode: '+228',
    emoji: '🇹🇬',
    code: 'TG',
  },
  {
    countryName: 'Tokelau',
    countryDialCode: '+690',
    emoji: '🇹🇰',
    code: 'TK',
  },
  {
    countryName: 'Tonga',
    countryDialCode: '+676',
    emoji: '🇹🇴',
    code: 'TO',
  },
  {
    countryName: 'Trinidad and Tobago',
    countryDialCode: '+1868',
    emoji: '🇹🇹',
    code: 'TT',
  },
  {
    countryName: 'Tunisia',
    countryDialCode: '+216',
    emoji: '🇹🇳',
    code: 'TN',
  },
  {
    countryName: 'Turkey',
    countryDialCode: '+90',
    emoji: '🇹🇷',
    code: 'TR',
  },
  {
    countryName: 'Turkmenistan',
    countryDialCode: '+993',
    emoji: '🇹🇲',
    code: 'TM',
  },
  {
    countryName: 'Turks and Caicos Islands',
    countryDialCode: '+1649',
    emoji: '🇹🇨',
    code: 'TC',
  },
  {
    countryName: 'Tuvalu',
    countryDialCode: '+688',
    emoji: '🇹🇻',
    code: 'TV',
  },
  {
    countryName: 'Uganda',
    countryDialCode: '+256',
    emoji: '🇺🇬',
    code: 'UG',
  },
  {
    countryName: 'Ukraine',
    countryDialCode: '+380',
    emoji: '🇺🇦',
    code: 'UA',
  },
  {
    countryName: 'United Arab Emirates',
    countryDialCode: '+971',
    emoji: '🇦🇪',
    code: 'AE',
  },
  {
    countryName: 'United Kingdom',
    countryDialCode: '+44',
    emoji: '🇬🇧',
    code: 'GB',
  },
  {
    countryName: 'United States',
    countryDialCode: '+1',
    emoji: '🇺🇸',
    code: 'US',
  },
  {
    countryName: 'Uruguay',
    countryDialCode: '+598',
    emoji: '🇺🇾',
    code: 'UY',
  },
  {
    countryName: 'Uzbekistan',
    countryDialCode: '+998',
    emoji: '🇺🇿',
    code: 'UZ',
  },
  {
    countryName: 'Vanuatu',
    countryDialCode: '+678',
    emoji: '🇻🇺',
    code: 'VU',
  },
  {
    countryName: 'Venezuela, Bolivarian Republic of Venezuela',
    countryDialCode: '+58',
    emoji: '🇻🇪',
    code: 'VE',
  },
  {
    countryName: 'Vietnam',
    countryDialCode: '+84',
    emoji: '🇻🇳',
    code: 'VN',
  },
  {
    countryName: 'Virgin Islands, British',
    countryDialCode: '+1284',
    emoji: '🇻🇬',
    code: 'VG',
  },
  {
    countryName: 'Virgin Islands, U.S.',
    countryDialCode: '+1340',
    emoji: '🇻🇮',
    code: 'VI',
  },
  {
    countryName: 'Wallis and Futuna',
    countryDialCode: '+681',
    emoji: '🇼🇫',
    code: 'WF',
  },
  {
    countryName: 'Yemen',
    countryDialCode: '+967',
    emoji: '🇾🇪',
    code: 'YE',
  },
  {
    countryName: 'Zambia',
    countryDialCode: '+260',
    emoji: '🇿🇲',
    code: 'ZM',
  },
  {
    countryName: 'Zimbabwe',
    countryDialCode: '+263',
    emoji: '🇿🇼',
    code: 'ZW',
  },
];

export const onBoardingData = [
  {
    id: 1,
    path: IMAGES.onBoarding1,
  },
  {id: 2, path: IMAGES.onBoarding2},
  {id: 3, path: IMAGES.onBoarding3},
];

// for card data
export const HomeCartData = [
  {
    id: '1',
    image:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageFour.png?alt=media&token=10b7a56e-fbba-4f69-83bc-b8ab6dbf49e5',
    motivation: t('motivation'),
    company: t('company'),
    body: t('body'),
  },
  {
    id: '2',
    image:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageFour.png?alt=media&token=10b7a56e-fbba-4f69-83bc-b8ab6dbf49e5',
    motivation: t('motivation'),
    company: t('company'),
    body: t('body'),
  },
  {
    id: '3',
    image:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageFour.png?alt=media&token=10b7a56e-fbba-4f69-83bc-b8ab6dbf49e5',
    motivation: t('motivation'),
    company: t('company'),
    body: t('body'),
  },
  {
    id: '4',
    image:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageFour.png?alt=media&token=10b7a56e-fbba-4f69-83bc-b8ab6dbf49e5',
    motivation: t('motivation'),
    company: t('company'),
    body: t('body'),
  },
];

// Video Card
export const RecentlyBookedGridViewCartData = [
  {
    id: '1',
    image: IMAGES.ImageSix,
    name: 'Radisson Blu Hotel',
    bookmark: false,
  },
  {
    id: '2',
    image: IMAGES.ImageSeven,
    name: 'Radisson Blu Hotel',
    bookmark: false,
  },
];
//

//

export const videoData = [
  {
    id: '1',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageSix.png?alt=media&token=5d133ff4-17c0-4695-a067-6b7a0d337ba8',
    text: t('lunge'),
  },
  {
    id: '2',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageNine.png?alt=media&token=79c43c2e-9593-42c0-884e-a235776cfab7',
    text: t('squat'),
  },
  {
    id: '3',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImageTen.png?alt=media&token=4d141fbe-69fb-4450-928b-668660e0d21b',
    text: t('pushup'),
  },
  {
    id: '4',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImage11.png?alt=media&token=4700ec84-957b-4eb4-a125-47745a58ad7a',
    text: t('walking'),
  },
  {
    id: '5',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImage12.png?alt=media&token=b0fb689b-b19f-45a2-b034-3d48ce9ce76a',
    text: t('Knee'),
  },
  {
    id: '6',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImage13.png?alt=media&token=217e2ed8-c676-46ed-93c6-a838638353a5',
    text: t('Overhead'),
  },
  {
    id: '7',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImage14.png?alt=media&token=72ce17a5-65a0-439f-b27e-e1251a6183bd',
    text: t('dip'),
  },
  {
    id: '8',
    imageSource:
      'https://firebasestorage.googleapis.com/v0/b/activeally-14fa1.appspot.com/o/Images%2FImage15.png?alt=media&token=b297e817-ac65-4e41-820a-35c0e06da961',
    text: t('bicep'),
  },
];

// Notification Data

export const notifications = [
  {id: '1', title: t('Ai'), description: t('start')},
  {id: '2', title: t('Ai'), description: t('start')},
  {id: '3', title: t('Ai'), description: t('start')},
  {id: '4', title: t('Ai'), description: t('start')},
  {id: '5', title: t('Ai'), description: t('start')},
  {id: '6', title: t('Ai'), description: t('start')},
  {id: '7', title: t('Ai'), description: t('start')},
  {id: '8', title: t('Ai'), description: t('start')},
  // Add more items here
];

//
