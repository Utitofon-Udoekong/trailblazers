<template>
    <div class="my-20" id="faq">
        <h1 class="text-3xl text-center sm:text-5xl font-bold text-black">FAQS</h1>
        <div class="sm:max-w-4xl max-w-full mx-auto p-4">
            <div>
                <div class="tab w-full overflow-hidden border-l-2 hover:shadow-md shadow-lg mb-2 border-black border-solid" v-for="(faq, i) in faqs" :key="i" >
                    <input class="absolute opacity-0" :id="faq.id" type="radio" name="tabs2" />
                    <label
                        class="block p-5 text-sm sm:text-lg font-semibold leading-normal cursor-pointer"
                        :for="faq.id"
                    >{{ faq.q }}</label>
                    <div
                        class="tab-content w-full text-white text-md bg-black overflow-hidden leading-normal"
                    >
                        <p class="p-5 text-sm sm:text-md">{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>import { onMounted } from "@vue/runtime-core"

const faqs = [
    {
        q: "What Is Trailblazers?",
        a: "We are a team of traders with 2+ years experience in thе Exchange sphere. During the years we have decided to unite all of our knowledge and skills and make them available for you, our customers. If you need to obtain information about FOREX trading and all the abilities for change and abundance, this is the right place! Nowadays, running a business straight from home is a quite attractive way for most of the people abroad. But it’s of a great importance for you to remember that Stock Exchange trading is not easy. The difficulties are mainly concerned to make some profit and that’s why we are the professionals who will make things happen.",
        id: "tab-single-zero"
    },
    {
        q: "How can i receive your signals?",
        a: "You can receive our signals via Telegram app or via email. In order to receive our signals immediately with sound notification, we advice you to use Telegram app",
        id: "tab-single-one"
    },
    {
        q: "At what time and GMT+ do you send your signals?",
        a: "We post our signals when there is a trading opportunity from 8 АМ until 5 PM (UK and US sessions) at *GMT+2  or *GMT+3* We post our signals at GMT+2 after 29 October Winter Time* We post our signals at GMT+3 after 25 March Summer Time",
        id: "tab-single-two"
    },
    {
        q: "What are Trailblazers SIGNALS?",
        a: "Our Signals are quite easy to enforce and can also be followed with no difficulties by everyone who wants to. Our team of experts analyses and focus on the best profitable opportunities for selling or buying and once established, they give them to you as a chance for opening an auction. In addition, there is almost no delay while entering a deal.",
        id: "tab-single-three"
    },
    {
        q: "I already have a trading account. How can I benefit from your site?",
        a: "You can use the account you have already made and trade with the help of the broker who has helped you until now. You are practically able to use our Signals and trading ideas while operating with every single broker you choose.",
        id: "tab-single-four"
    },
    {
        q: "Why should I open an account in your recommended broker?",
        a: "One of the most important steps, maybe the most important one, actually, is to choose the right broker for you. Our goal is to ensure security for our clients and their funds. In order to achieve this, we are close partners with Exness.  This broker is a leading online trading provider. Our many years of experience and multiple tests led us to the conclusion that this broker proves the best terms and conditions that align with our trade signals.",
        id: "tab-single-five"
    },
    {
        q: "Do I need any specific background or experience in order to enjoy Trailblazers?",
        a: "There is no need for you to be an expert – let us play this role. The service we offer is a good one for people who are looking for a great investment or for those who just need some extra profit. This is an opportunity given to the beginners and also to traders with some FX trading experience.",
        id: "tab-single-six"
    },
    {
        q: "How do you guys trade?",
        a: "We send limit orders and instant market execution but 90% of the time.we send limit orders.",
        id: "tab-single-seven"
    },
    // {
    //     q: "How can you help me?",
    //     a: "We can suggest some high-quality services which are especially appropriate for the beginners and active traders, as well.",
    //     id: "tab-single-eight"
    // },
    // {
    //     q: "Why should i use it?",
    //     a: "Our Service will help you grow up as a professional trader and will make you detect and grab the best opportunities FX offers over the time. You can predict the future and get some more profit while relaxing at home. If we have to give a definition of a trader, he/she is like a warrior who truly believe in his/her mission. This belief in the future success can be supported only by some steps and strategies given here. Our purpose is to train you and make you a trade master and to show you the shortest way of success too.",
    //     id: "tab-single-nine"
    // },
    // {
    //     q: "What's your recommended broker",
    //     a: "Our recommend broker is Exness.",
    //     id: "tab-single-ten"
    // },
]
export default {
    setup() {
        onMounted(() => {
            let myRadios = document.getElementsByName('tabs2');
            let setCheck;
            let x = 0;
            for (x = 0; x < myRadios.length; x++) {
                myRadios[x].onclick = function () {
                    if (setCheck != this) {
                        setCheck = this;
                    } else {
                        this.checked = false;
                        setCheck = null;
                    }
                };
            }
        })
        return {
            faqs
        }
    }
}
</script>

<style scoped>
.tab-content {
    max-height: 0;
    -webkit-transition: max-height 0.35s;
    -o-transition: max-height 0.35s;
    transition: max-height 0.35s;
}
/* :checked - resize to full height */
.tab input:checked ~ .tab-content {
    max-height: 100vh;
}
/* Label formatting when open */
.tab input:checked + label {
    color: #ff0007;
}
/* Icon */
.tab label::after {
    float: right;
    right: 0;
    top: 0;
    display: block;
    width: 1.5em;
    height: 1.5em;
    line-height: 1.5;
    font-size: 2rem;
    text-align: center;
    -webkit-transition: all 0.35s;
    -o-transition: all 0.35s;
    transition: all 0.35s;
}
/* Icon formatting - closed */
.tab input[type="checkbox"] + label::after {
    content: "+";
}
.tab input[type="radio"] + label::after {
    content: "+";
}
/* Icon formatting - open */
.tab input[type="checkbox"]:checked + label::after {
    content: "-";
}
.tab input[type="radio"]:checked + label::after {
    content: "-";
}
</style>