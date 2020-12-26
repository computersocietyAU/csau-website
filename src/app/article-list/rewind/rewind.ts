const basePath = "assets/rewind/";

export const REWIND: Array<Rewind> = [
    // New Rewind Chapter goes here with id:3

    {
        id: 3,
        title: "Rewind Chapter:3",
        description: "Arun Amaithi Rajan, an alumnus of the College of Engineering Guindy completed his BE Computer Science and Engineering in 2018. Let us rewind and take a look at his journey which started from CEG.",
        interviewee: "Arun Amaithi Rajan",
        intervieweeProfile: new URL("https://www.linkedin.com/in/arun-amaithi-rajan-6b9664133/"),
        preview: basePath + "3/preview.jpeg",
        date: "October 01, 2020",

        intro: {
            heading: "",
            passage: [
                "Arun Amaithi Rajan, an alumnus of the College of Engineering Guindy completed his BE Computer Science and Engineering in 2018.",
                "Let us rewind and take a look at his journey which started from CEG."
            ],
            image: [
                { path: "assets/rewind/3/nus_micron.png", alt: "NUS" }
            ],
        },

        body: [
            {
                heading: "Q: Could you please share with us your journey after graduating from CEG? ",
                passage: ["A: I graduated from CEG in May 2018 and joined the National University of Singapore (NUS) in August 2018 where I did my Masters in Computer Science. While I was studying in NUS, I interned for five months at PayPal.", "In Dec 2019, I graduated from NUS, and for the past nine months, I have been working as a Security Firmware Engineer at Micron technology."],

            },

            {
                heading: "Q: Many students in college have the dilemma of whether to go for work right after college or to pursue masters. Have you had this dilemma when you were in college?",
                passage: ["A: My ambition is to become a professor of Computer Science. To achieve this, bachelors degree alone is not sufficient and hence I was sure that I needed to pursue masters. I too had a dilemma about when to do higher studies. I didn’t dwell on this dilemma for a long time. I just made a simple “if...else” block: If my application gets accepted, I would go for masters, else I would work for some years.", "One must also consider if their family could support them to pursue higher studies right after college. It is an important factor. If you guys think there is no support from family then no worries, grab a job, earn well, and go for masters that will give you a different feel as well."],
            },

            {
                heading: "Q: When did you make a decision to pursue masters? Were you interested in Security back in CEG?",
                passage: ["A: I decided when I was in my third year of bachelors. In my fifth semester, in computer networks, I learned about security. I was fascinated by the term cryptography. And, I would say Dr. V. Vetriselvi ma’am was one of the reasons for my interest in security. She was my inspiration. She handled cryptography elective in the sixth semester.", "A strong foundation was laid back then, which made me select the security domain both for my seventh semester project and Final Year Project. Further, 'A security system is only as strong as its weakest link' This never fails to inspire me to explore new opportunities in security and make an impactful contribution."],

            },

            {
                heading: "Q: What was the application process for NUS like?",
                passage: ["A: For NUS, the application process starts around six months before the commencement of the course. Since I targeted August intake of 2018, I started my application in December 2017. The application to most of the universities abroad requires a Statement of Purpose (SOP), around 2 to 3 Letters of Recommendations (LOR), and scores of tests (like GRE, TOFEL, etc.). Your application will be processed based on these.", "For most of the universities in western countries, test scores are mandatory. But for NUS applications, the test score is optional if you have a high CGPA. In SOP, you need to write about why you wish to pursue masters and what are all your skill sets.", "You need to convince them why you are eligible to be provided a seat in their university. The LOR has to be provided by the faculty under whom you have enrolled in a few courses or under whom you have done projects."],
            },

            {
                heading: "Q: According to you, why must one pursue masters? In what ways the opportunities for people with an undergraduate and postgraduate degree differ?",
                passage: ["A: If one wanted to do more research in their domain of interest or if one wanted development in career, one could choose masters. A person with a postgraduate degree would have specialized in a particular domain. Hence, people with postgraduate degrees have good opportunities in their skilled domain."],
            },

            {
                heading: "Q: What was your internship at PayPal like?",
                passage: ["A: I got an internship at PayPal through NUS. Since PayPal is a FinTech company, security is one of the most important aspects they focus on. It was more like a research intern where I was part of a team in the security domain. I was expected to build a Proof Of Concept to enhance security in their application.", "Internships provide a good opportunity to understand the work environment of the company, what are the projects they focus on, how they handle each project, and how the concepts you have studied are applied in real-time. In short, it provides you with industry experience."],
            },

            {
                heading: "Q: Could you tell us about how you succeeded in bagging a job at Micron technology? ",
                passage: ["A: The placements process in NUS is different from that of CEG. Here, the process happens through CUIC. But, in NUS, a career fair will be arranged where the companies will have their own stalls. The students can contact the companies directly in the career fair and can get some information about the company and the available positions, if the students are interested they can submit their resume.", "After analyzing the resume, the company will contact the students directly if they are eligible. The rounds that follow are similar to the technical rounds in any placement."],
            },
            {
                heading: "Q: What would you like to tell your juniors in particular?",
                passage: ["A: There are three things.", "First, please have a strong understanding of the basics of CS. I insist you guys learn Data Structures (DS) and algorithms. I promise, if you are strong in just DS and algorithms (practice in any programming language - I would prefer C) then you will grab a job for sure.", "Second, for mini-projects try to code on your own. Many students will get code from GitHub and will not have any idea about what that code is all about. That won't help. At least try to understand the code you got from GitHub and build your idea on it.", "Finally, I would recommend you to be in contact with your professors. It should not be like they don’t know you even after studying for four years under them. Interact with them a lot. It will help you find your interests and in your application process for higher studies."],
            },
            {
                heading: "Q: Name one thing that you miss in CEG.",
                passage: ["A: The one thing I miss is the CEG - hostel, dept, KP, wifi hut, canteen, and every single thing in CEG. I bet you will never find an environment like CEG anywhere. To add on to that, the time when you are in your 17s to 20s are precious. I miss it a lot."],
            },


        ],
        outro: {
            heading: "This is the Test Ending",
            passage: ["Computer Society of Anna University thanks Arun Amaithi Rajan for his time and insights."],
        },
    },
    {
        id: 2,
        title: "Rewind Chapter:2",
        description: "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year 2015. Having started his career in Zoho corporation as a web performance engineer, he has a remarkable experience in many job roles within the company.",
        interviewee: "Ramkumar",
        intervieweeProfile: new URL("http://linkedin.com/in/ramkumar-sundaravadivel-2631771b3"),
        preview: basePath + "2/preview.png",
        date: "September 10, 2020",

        intro: {
            heading: "",
            passage: [
                "Ramkumar, an alumnus of College of Engineering Guindy completed his BE Computer Science and Engineering in the year 2015.", "Having started his career in Zoho corporation as a web performance engineer, he has a remarkable experience in many job roles within the company.",
                "Here’s a little rewind on his views and experiences about his career path."
            ],
            image: [
                { path: "assets/rewind/2/preview.png", alt: "ZOHO" }
            ],
        },

        body: [
            {
                heading: "Q: Can you tell us about your work experience with Zoho corporation?",
                passage: ["A: Sure, I was selected as a web performance engineer in Zoho corporation through campus placements. Initially, I worked as a web developer in back-end development for a year to know more about Zoho and its web services. This experience gave me a deep understanding of the internals and performances.", "Having gotten a strong foothold in these nuances, I worked as a web performance engineer. Then I scouted for other roles and was offered a software developer role and a Machine Learning Engineer role. I accepted the ML engineer role and it required a prime focus on NLP(Natural language processing). A couple of months ago, I shifted to a position in product management."],
            },

            {
                heading: "Q: How can students prepare for the placements/internships?",
                passage: ["A: I would suggest starting preparations for placements during your third year while seeking internships. Getting an internship or not does not matter, you can consider this as a foundation for your placement preparation. In my opinion, this would be better than preparing for the placements in the fourth year.",
                    "When you attend interviews, answer honestly about your skills instead of sugar coating. For final years, concentrate on aptitude and other topics that you have to basically know for placements. You have to have a command over data structures. There are plenty of resources to study them. But one thing I would like to add to interview preparations is “never lose hope”. To quote myself as an example, Zoho was the 11th interview I attended during the campus placements. Students usually lose hope and get dejected if they don’t get selected, but I would say even if you don’t get placed in the campus placements, CEG has a well-connected alumni network, so you could contact them for help. What matters is a good resume and perseverance. There are plenty of opportunities if you don’t lose hope.",
                    "Establish the basics and fundamentals like basic data structures, pointers, Object-oriented programming, and all that. Choose one coding language you are proficient and confident with. Besides, concentrate on aptitude and logical thinking to do well in the first round."],

            },

            {
                heading: "Q: How did you prepare for placements and how was the experience?",
                passage: ["A:I initially started with basic data structures and then learned ways of manipulating them to solve a range of problems. Aptitude does have a significant role in the first rounds. The placement process itself is a learning experience. As I said, Zoho was my 11th interview, so from the first to tenth interview, I would learn new stuff. As you attend a lot of interviews, you’ll gain experience and become proficient. There are a lot of factors that go into the company’s consideration of recruitment. All you can do is do your best and be yourself.",
                    "I don’t exactly remember the format of our interviews but it happened at MIT. After an initial coding round, we had an advanced coding round and the interviews tested strong basic skills."],

            },
            {
                heading: "Q: What was your area of interest in college and how did it change when you started working?",
                passage: ["A: Well, I was interested in Web development and had other scattered areas of interest. I did have an interest in creating websites and being a developer, but it wasn’t very narrowed down. Even as I went for placements, I made up my mind to land on a developer role and not a testing role. But as soon I started my job, I learned things quickly and polished my skills. As I explained, I started as a web performance engineer and for that, I had to know the nuances and hence worked as a web developer. Then, I found the field of machine learning interesting. Creating something new has always excited me and still does. I did a computer vision project for my final year project and that kind of helped me at the start.", "Shifting from a web developer background to a machine learning engineer was a leap and I had to start from scratch, but I was able to prove myself capable. To summarise, my areas of interest were very broad during college and they narrowed down as I started working."],

            },

            {
                heading: "Q: How did you expect the industry would be and how different was it from your imagination?",
                passage: ["A: I didn’t have much idea about it before. It was a new experience to start with. I had always been a pretty good coder, so my only aim was to do well in the job with sincerity.", "The first difference I noticed between the company and college was how students and professional coders differ. In college, we code it without considering efficiency or vulnerabilities, but in the industry it’s different. This starts from validating the inputs, writing modularized code to efficiently packaging the code, and so on. When you write production code, the quality of the code you write matters and you have to think from the user's perspective. Also, scalability matters in production code.", "As regards to different technologies, they were mostly those I learned from my college days like HTML, CSS, Javascript, and other frameworks. As a novice, I noticed these differences and I could say this changed me from a student to a professional."],

            },

            {
                heading: "Q: What would be your advice to juniors?",
                passage: ["A: I would like to tell my juniors that they’ll eventually land in a role that they want to. It is not a big shortcoming if you haven't found an area of interest yet. Don’t be afraid to experiment. You can always try on different domains and switch them if something else interests you. Personally, I would say “learn and unlearn”, skilling and upskilling has now become my motto. You have to develop this practice of learning new skills and improvising them.", "New technologies emerge every day and the world is moving towards digitization, so education doesn’t end with your college. No matter what role you land in, you can always explore and find a domain that suits you."],

            },

            {
                heading: "Q: What would you tell your younger self?",
                passage: ["A: If I were to meet myself in my sophomore years, I would suggest doing a lot of projects. I don't have many regrets, but I would have asked myself not to stress about the future. I would also ask myself to develop a habit of skilling and reskilling.", "However, in the long run, I realized going with the flow of life is important. I would have also asked myself to enjoy my college life more, I miss college days a lot now."],

            },


        ],

        outro: {
            heading: "This is the Test Ending",
            passage: ["CSAU thanks him for his time and insights!"],

        },
    },
    {
        id: 1,
        title: "Rewind Chapter:1",
        interviewee: "Lenin Jaganathan",
        description: "Lenin Jaganathan graduated from College of Engineering Guindy (CSE) in the year 2019 and currently he is working as a Software Engineer at PayPal(Chennai).",
        intervieweeProfile: new URL("https://www.linkedin.com/in/lenin-jaganathan/"),
        preview: basePath + "1/preview.png",
        date: "August 31, 2020",

        intro: {
            heading: "",
            passage: [
                "Lenin Jaganathan graduated from College of Engineering Guindy (CSE) in the year 2019 and currently he is working as a Software Engineer at PayPal(Chennai).",
                "“You can't go along with someone else's path and connect it with yours”, is something that Lenin strongly believes.", "Let's hear what Lenin has to say about his experience."
            ],
            image: [
                { path: "assets/rewind/1/preview_2.png", alt: "PayPal" }
            ],
        },

        body: [
            {
                heading: "Q: How did you prepare for placements?",
                passage: ["A: I always believe that you cannot copy someone else's path and relate it to yourself. Of course you can take their bits and pieces of others experience as an inspiration. But at the end of the day you cannot do what others did to achieve something and expect the same.", "My preparation phase was quite a short one. To be exact a month before I got placed. I began to brush up the basics. Every online round was a learning. Every time I came back from a interview I learnt a new Data Structure. I did not go for many algorithms as I had very little time instead tried to solve the problem mathematically and convert it into code. It worked for me."],
            },

            {
                heading: "Q: What would be your advice to your juniors as to prepare for interviews?",
                passage: ["A: Self evaluate yourself. Some may know how to apply algorithms directly. Some may try to solve it mathematically. So it entirely depends on you. (Say, you can solve code mathematically. In that case you should be confident enough that you can solve any problem that is given to you, at least the normal mathematical ones if not for the one’s related to Data Structures.)", "I would advice more practice in an Object Oriented programming language. (Knowing about the language and OOPS concepts will help you in the second round.)", "Try to have an idea of all the Data structure even if you don't know how to implement, so that you don't go blank when the interviewer questions you. Every time I go for the first round I will get to see an alien Data Structure. I would want all of you to avoid that.", "You can use platforms like geeksforgeeks, leetcode, hackerrank. Practice a lot. You can solve mathematically but it will be more time consuming. So in that case familiarize yourself with algorithms."],
            },

            {
                heading: "Q: Can you share your interview experience with Paypal?",
                passage: ["Yes sure.", "First Round : Two questions were asked. One was on strings and the other was a Data Structure. I answered one and solved it partially. ( 9/10 test cases ) As I did not spend more time in Data Structures. I could not solve it. I was shortlisted among the 30 for the second round. I was always more comfortable with the face to face interview.", "Interviews : Interviewer asked what was my most comfortable subject and I said DBMS and all my questions were based on it out of which I answered almost everything The problem solving sessions I was able to give algorithm solutions. And one round questions were asked on frameworks which I knew (Node JS). And four rounds went like that and I got selected."],

            },

            {
                heading: "Q: Before you got into the industry, what you thought it would be like and how it turned out to be?",
                passage: ["A: As everyone does, I contacted few of my seniors and asked a lot of ‘how is it’ questions. Their responses where both positive and negative. (It depends on the people around you .. there will be a lot of politics in the corporate world…)", "I thought everything would go formal when I went on the first day to office, but it turned out to be completely different because of my team. Although it was a micro team, they helped me get along with the corporate environment. I had a smooth transformation from college to corporate because of my manager who proves to be the best mentor and my team who helped me grow."],

            },

            {
                heading: "Q: Anything you would like to tell your younger-self today? ",
                passage: ["A: Not only to myself but to every engineering student. One of biggest myth is if you know a lot of technologies you are a master. But it is not that way. Many students know Javascript and Python but underrate C++ and Java like I did. Yes, JS and python made a revolution in the industry but it is very important to know the foundations (C++ and Java) too.", "I feel let down by myself when it comes to core knowledge's like networks. I could have got more knowledge when about it in college but i wasn't that type to explore more in college. But I feel good about myself that I’m able to cope up with the things that I should have done in my college days."],
            },

        ],

        outro: {
            heading: "This is the Test Ending",
            passage: ["The Computer Society of Anna University thanks Lenin for sharing his experience ."],
        },
    },
]



export interface ArticleSection {
    heading: string;
    passage: string[];
    image?: Array<Image>;
}

export interface Image {
    path: string;
    alt: string
}
export interface Rewind {
    id: number;
    title: string;
    description: string;
    date: string;
    preview: string;
    interviewee: string;
    intervieweeProfile: URL;
    intro: ArticleSection;
    body: ArticleSection[];
    outro: ArticleSection;
}


