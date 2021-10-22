<template>
    <div>
        <div class="px-8 py-2 bg-black fixed inset-x-0 top-0 w-full">
            <div class="logo w-1/6 sm:h-20 h-16">
                <a href="/" class="w-full h-full">
                    <img
                        src="@/assets/images/logo-text.png"
                        class="w-full h-full sm:block hidden"
                        alt="logo"
                    />
                    <img
                        src="@/assets/images/logo.png"
                        class="w-full h-full sm:hidden block"
                        alt="logo"
                    />
                </a>
            </div>
        </div>
        <div class="p-8 mt-28">
            <p class="text-md font-semibold cursor-pointer" @click="$router.back()">&lArr; Back</p>
            <h1 class="text-4xl font-bold pb-8">USER AGREEMENT</h1>
            <p>Forex trading has large potential rewards, but also a large potential risk. You must be aware of the risks and be willing to accept them in order to invest in Forex markets. Don’t trade with money you can’t afford to lose especially with leveraged instruments such as forex trading. The past performance of any trading system or methodology is not necessarily indicative of future results. You could lose all of your money fast due to: poor market trading conditions, mechanical error, emotional induced errors, news surprises, and earnings releases. Trailblazers takes no responsibility for loss incurred as a result of our trading signals. By signing up as a member, you acknowledge that we are not providing financial advice and that you are making a decision to copy our trades on your own account. We have no knowledge on the level of money you are trading with or the level of risk you are taking with each trade. In this regard, the amounts paid for the use of our signals can’t be refunded. You must make your own financial decisions, we take no responsibility for the money you made or lost as a result of our signals or advice on forex related products on this website. You should ensure you understand all of the risks associated with trading before using Trailblazers. services.</p>
            <p>ALL RIGHTS RESERVED. THE USE OF THIS WEBSITE CONSTITUTES ACCEPTANCE OF OUR USER AGREEMENT This website and all information is intended for educational purposes only and does not give financial advice. Trailblazers. is not a service to provide legal and financial advice; any information provided here is only the personal opinion of the author (not advice or financial advice in any sense, and in the sense of any act, ordinance or law of any country) and must not be used for financial activities. Trailblazers. does not offer, operate or provide financial, brokerage, commercial or investment services and is not a financial advisor. Rather, Trailblazers. is an educational site and a platform for exchanging Forex information. Whenever information is disclosed, whether express or implied, about profit or revenue, it is not a guarantee. No method or trading system ensures that it will generate a profit, so always remember that trade can lead to a loss. Trading responsibility, whether resulting in profits or losses, is yours and you must agree not to hold Trailblazers. or other information providers that are responsible in any way whatsoever. The use of the system means that the user accepts Disclaimer and Terms of Use. Trailblazers. is not represented as a registered investment consultant or brokerage dealer nor offers to buy or sell any of the financial instruments mentioned in the service offered. While Trailblazers. believes that the content provided is accurate, there are no explicit or implied warranties of accuracy. The information provided is believed to be reliable; Trailblazers. does not guarantee the accuracy or completeness of the information provided.</p>
            <p>Third parties refer to Trailblazers to provide technology and information. If a third party fails, then there is a risk that the information may be delayed or not delivered at all. All information and comments contained on this website, including (but not limited to) opinions, analyzes, news, prices, research, do not constitute investment advice or an invitation to buy or sell any type of instrument. Trailblazers. assumes no responsibility for any loss or damage that may result, directly or indirectly, from the use or dependence on such information. All information contained on this web site is a personal opinion or belief of the author. None of these data is a recommendation or financial advice in any sense, also within the meaning of any commercial act or law. Writers, publishers, and affiliates of Trailblazers. are not responsible for your trading in any way. The information and opinions contained in the site are provided for information only for educational reasons, and should never be considered as direct or indirect advice to open a trading account and/or invest money in Forex trading with any Forex company. Trailblazers. assumes no responsibility for any decisions taken by the user to create a merchant account with any of the brokers listed on this website. Anyone who decides to set up a merchant account or use the services, free of charge or paid, with any of the Forex companies mentioned on this website, bears full responsibility for their actions.</p>
            <p>Any institution that offers a service and is listed on this website, including forex brokers, financial companies and other institutions, is present only for informational purposes. All ratings, ratings, banners, reviews, or other information found for any of the above-mentioned institutions are provided in a strictly objective manner and according to the best possible reflection of the materials on the official website of the company. Forex trading is potentially high risk and may not be suitable for all investors. The high level of leverage can work both for and against merchants. Before each Forex investment, you should carefully consider your goals, past experience and risk level. The opinions and data contained on this site should not be considered as suggestions or advice for the sale or purchase of currency or other instruments. Past results do not show or guarantee future results.</p>
            <p>Neither Trailblazers. nor its affiliates ensure the accuracy of the content provided on this Site. You explicitly agree that viewing, visiting or using this website is at your own risk.</p>
            <p>1. Trading is a Risky Affair : Forex is an extremely risky affair and is not meant to be visualized for retirement funds. So, it is most suitable for customers who understand the risks and are willing to undertake it and financially capable of standing losses that can even exceed the deposited amount. Hence, a proper understanding of the risk is necessary prior to trading in forex.</p>
            <p>2. High Leverage and Low Margin Can Culminate in Quick Loss : Owing to price changes and fluctuations in foreign exchange contracts and cross-currency contracts, the combination of high leverage and low margin can lead to significant losses. The initial margin can be small when you compare it with the value of foreign currency and so the transactions can be leveraged. Customers need to maintain the minimum margin requirements for the open position at all times. It is the duty of the customer to keep an eye and monitor his net outstanding balance. If the minimum requirement is not maintained, we hold the right to liquidate all open positions. Similarly, leverages too can lead to high gains as well as losses.</p>
            <p>3. Risk-reducing Orders and Strategies : Orders like stop-loss orders or stop limit orders that aim at limiting the losses to some upper amount may not be effective because sometimes, it becomes impossible to execute such orders owing to the market condition.</p>
            <p>4. Options – Variable Degree of Risk : When you are involved in transactions in foreign currency; the risk element increases. You have two options namely put or call and you should be familiar with the differences and meaning of the options. You should be aware of which options need to be increased so that you can get higher profits. The purchaser can either offset or even expire the option depending upon the type of options and the nature of the option that was purchased. Exercising an option is always going to result in a cash statement. There are instances where the purchaser can acquire spot positions as well with associated liabilities for margin. If your purchased options expire , you will suffer a total loss of your investment and it shall also comprise purchase of the option as well as the transaction costs too. It is worth adding that deep out of the money options are least likely to be profitable. There are a lot of details that are involved in buying and selling of options and so when you indulge in it, you should be careful enough to check out all such details thoroughly as it can have huge repercussions. Check the clauses and the amount of loss it can evoke and related factors before indulging in the same.</p>
            <p class="text-black font-bold text-xl">Good luck as you make the best of our services!</p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Footer from "../components/Footer.vue";
export default {
    components: {
        Footer
    }
}
</script>

<style scoped>
p {
    padding-bottom: 10px;
}
</style>