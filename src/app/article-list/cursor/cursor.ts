const basePath: string = "assets/cursor/";

export const CURSOR: Array<Cursor> = [
    // New Cursor Article goes here with id:3
    {
        id: 2,
        title: "RedTacton",
        subtitle: "WHERE FANTASY MEETS FACTS!!",
        description: "We knew what are ethernet cables but can technology make humans act like ethernet cables? It may sound impossible but read this article about Redtacton to know how capable is the technology in this case.",
        preview: basePath + "redtacton/preview.png",
        date: "December 25, 2020",
        body: [
            {
                content: "Can you imagine swapping the business cards just by shaking your hands or being able to print a photo by placing one hand on the laptop and other on the printer?! It might sound fictitious but the Japanese Communication Company, Nippon Telegraph and Telephone Corporation(NTT), has brought this innovative idea into the real picture with prodigious RedTacton Technology. The RedTacton is a novel communication technology that pioneers the electronic future by using the human body surface as a high speed and safe network transmission path. It solely scrapes up the minute electric fields exuded on the surface of the body to transmit/receive data at 10 Mbps."
            },
            {
                heading: "HERE'S A CATCH",
                content: "Here's a glimpse of how the name, ‘RedTacton’ was derived. ‘Red’, owing to the fact that it symbolises good luck conforming to the auspicious Japanese culture, here signifies the cordiality and warmth of interpersonal communication . ‘Tacton’ is nothing but “Touch-Act-On”, which literally refers to jump-starting an action by touching.",
                imagePath: [basePath + "redtacton/redtacton_1.jpg"]
            },
            {
                heading: "HOW DOES IT WORK?",
                content: "We all have heard of LAN(Local Area Network), WAN(Wide Area Network) and MAN(Metropolitan Area Network) but RedTacton is a break-through technology that successfully uses HAN(Human Area Network). It is neither wireless or wired communication rather it enables communication by touching. A transmission path is formed at the moment, a part of the human body comes in contact with a RedTacton transceiver and physical separation ends the contact. The transceiver encompasses the Data Sensing circuit which checks the incoming signals from the interface for data and dispatches it to the transmitter. The transmitter inturn induces a weak electric field on the body surface that is passed on to the receiver. The photonic electric field sensor in the receiver varies the optical properties of electro-optic crystal in accordance with the received weak electric field. The laser which is passed through the crystal, scrutinizes the change in optical properties of crystal and converts the upshot into electric signals inside the detector circuit. Hence, logical hodgepodge of communication emerges in harmony with the natural and physical movements of the user.",
                imagePath: [basePath + "redtacton/redtacton_2.jpg"]
            },
            {
                heading: "WHY REDTACTON?",
                content: "Tech-geeks might have a question: “There are a lot of well-established technologies like Wi-Fi, Bluetooth, Zigbee, IrDA etc.., then what is the need for RedTacton?”. Well, the answer is obvious. The arriving signals can be hacked easily, so security becomes a problem in the aforementioned technologies. However, hacking the RedTacton is nearly inconceivable as the transmission takes place only among RedTacton transceivers. Unlike Bluetooth, there is no user limitation and no pell-mell drop in transmission speed even in multi-user environments prompting 'congestive collapse'.",
            },
            {
                heading: "HOW IS IT USEFUL?",
                content: "Now I'll just endeavor to enlighten its pragmatic application with genuine-life example. The Iraq war is most arguably the most controversial event in recent history, where gun security would be highly salutary. Guns are most often detracted from dead troopers in the scuffle and utilized by the foe or it could be sold in the astronomically immense bootleg market for glommed weapons. If those Firearms have built-in transceiver programmed to transceiver worn by soldier, then it would be rendered futile in devoid of allied transceiver that is programmed to authorise the weapon to be shot. Redtacton lodged medicine bottles trigger an alarm whenever the utilizer physically contacts the erroneous medicine. Customers can get entire information on products immediately after touching it. One of its potential uses is Automatic user authentication and log in with just a touch. This innovation opens up a portal to trade private data in a splitsecond, personalize the automobiles and detect human ailments.",
            },
            {
                heading: "HUMAN SAFETY",
                content: "Transceivers are completely insulated leaving no chances for the current to flow inside the body. When communication embarks, displacement current is engendered by the electrons in the body because the body is subjected to the minute electric field. Such displacement currents are not an immensely colossal deal as they are daily occurence to which we are habituated. Redtacton conforms to 'Radio-frequency exposure protection standard'(RCR STD-38).",
            },
            {
                heading: "FINAL WORD",
                content: "Though Redtacton holds innumerable benefits, the crux of matter is the implementation cost and short-range transmission. But the bottom line is that, within a few years from now, NTT’s utopian vision of RedTacton will unquestionably transform humans into striding ethernet cables and revolutionize the entire hustle-bustle communication world.",
            },

        ],
        author: "Suwetha S",
        department: "Electrical and Electronics Engineering - Red Tag",
    },
    {
        id: 1,
        title: "Bootstrapping",
        subtitle: "COMPUTER SCIENCE’S VERY OWN CHICKEN-OR-EGG PROBLEM",
        description: "Everyone is aware of the chicken or the egg problem of normal life. Here is what the author needs to say about computer science's chicken or the egg problem.",
        others: ["Foreword: The following is not original. It consists of the author’s opinions, impressions and primarily his understanding of a certain topic."],
        preview: basePath + "bootstrapping/preview.png",
        date: "December 25, 2020",
        body: [
            {
                content: "Although technology in its ideal form might be the closest thing to magic, it is my personal opinion that the pleasures of technology are better enjoyed by demystifying it. One of the more elegant things we’ve managed to do since the initial days of computing is abstraction. Lower level languages have given way to higher level languages that have allowed more people to be able to code. We all know that compilers and interpreters facilitate this abstraction. An extremely interesting facet of these compilers is that a lot of them are written in the language that they compile!"
            },
            {
                content: "The modern day C compiler, itself is a binary that was written in C! This is achieved by bootstrapping; a term that originates from the idea of one pulling themselves up by their own bootstraps. The C compiler, in the same manner, is written in C and sometimes compiled by the same compiler for better performance and a variety of other reasons.",
            },
            {
                content: "The idea of bootstrapping is best explained by what are known as T-diagrams, which I personally prefer thinking of as puzzle pieces that can fit together in a few ways.",
            },
            {
                content: "You need a program that takes in C code and turns it into a binary. Let’s say that this binary has a quality described by N. Now, we could write an assembly program that does this (a compiler) and assemble it to produce a binary of quality A(another compiler). Now this binary would be poorer in quality than N and will be extremely hard to write. It would be impractical & difficult for this binary A to compile C code into a binary N. This is because assembly is a very low level language. It is limited to simple memory manipulation and basic operations. It has no support for data types like structures, which form a very integral part of writing code in C.",
                imagePath: [basePath + "bootstrapping/bootstrapping_1.png"]
            },
            {
                content: "We can’t efficiently generate a binary of high quality N, using a compiler of quality A(written in assembly). We can generate a binary of quality B(slightly better) using a binary A. Imagine we write a program with code-generation capability and give it to the binary A(assembled compiler). It will be compiled to give us a binary of quality A. This resulting binary A, itself will be a compiler!",
            },
            {
                content: "What we have as input in fig 2 is a C program for a compiler. This C program needs to be converted into a binary and that is done using the compiler that was written in assembly(fig 1.b - lower). Now, this compiler(assembled) takes a C program as input and produces another binary of quality A. What we have as output here is a binary(compiler) of quality A, written in the C programming language. Due to the input code, this resulting binary is a compiler(quality A). Let's call this resulting compiler, compiler Mark I.",
                imagePath: [basePath + "bootstrapping/bootstrapping_2.png"]
            },
            {
                content: "We have a compiler, Mark 1 which could be made much better. In all fairness, this compiler was compiled using an assembled binary(lower quality). So let’s write another piece of C code, which can also compile other programs, but better. Now if we compile this code, using compiler Mark I, we get a binary of quality B, which is a better compiler; Mark II."
            },
            {
                content: "The input in fig 3 is the new compiler code that was written(mark II). We use the old compiler, mark I to compile this code(mark II)  to generate a binary of quality B. Now, we have a much better compiler(mark II) which could take in C, compile it and produce a binary of quality B.",
                imagePath: [basePath + "bootstrapping/bootstrapping_3.png"]
            },
            {
                content: "This binary B, has one weakness; it itself is running on Binary A, which is an older, poorer version of our compiler. But, at this point, we have with us, compiler Mark 2, which is a much better version than the binary A compiler, mark I. What we can do here, is take the C code(mark II) written for the input in fig 3 and compile it using our Mark II compiler to produce a binary that is even better than our original Mark II(compiled using mark I). This output binary(Mark III) is of quality B, can produce code of quality B and is compiled using our compiler, which itself is of quality B! This  was our initial expectation. This entire process can be visualised by putting together the above figures.",
                imagePath: [basePath + "bootstrapping/bootstrapping_4.png"]
            }

        ],
        author: "Prithivi Maruthachalam",
        department: "Computer Science and Engineering - Red Tag",
    },
];

export interface CursorBody {
    heading?: string;
    content?: string;
    imagePath?: Array<string>;
}

export interface Cursor {
    recent?: string;
    id: number;
    title: string;
    subtitle: string;
    description: string;
    preview: string;
    date: string;
    others?: Array<string>;
    body: Array<CursorBody>;
    author: string;
    department: string;
}