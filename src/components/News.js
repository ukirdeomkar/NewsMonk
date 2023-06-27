import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Beebom" },
      author: "Beebom Staff",
      title:
        "Google Pixel 8 Series Could Bring a Desktop Mode to Rival Samsung DeX - Beebom",
      description:
        "Google can finally equip its Pixel 8 series with a desktop mode similar to the DeX functionality by Samsung. Check out the details here!",
      url: "http://beebom.com/google-pixel-8-series-desktop-mode-rumor/",
      urlToImage:
        "https://beebom.com/wp-content/uploads/2023/06/Google-Pixel-7-Pro-in-Green-color-option-showcased-with-a-gray-background.jpg",
      publishedAt: "2023-06-26T10:01:23Z",
      content:
        "Pixel fans have been eagerly waiting for the launch of the Pixel 8 lineup expected later this year. We have been hearing promising rumors about the Tensor G3 chipset, camera upgrades, and software en… [+2407 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "Dhoni Effect: Candy Crush gets over 30 lakh downloads within hours of his video with Indigo air hostess - Indiatimes.com",
      description:
        "During a flight from Ranchi, former Indian cricket captain Mahendra Singh Dhoni was left blushing by a surprise encounter with an air hostess. The heartwarming incident, captured on camera, occurred at 30,000 feet, showcasing Dhoni's smile and intera",
      url: "https://timesofindia.indiatimes.com/videos/viral-videos/dhoni-effect-candy-crush-gets-over-30-lakh-downloads-within-hours-of-his-video-with-indigo-air-hostess/videoshow/101278091.cms",
      urlToImage:
        "https://timesofindia.indiatimes.com/photo/msid-101278091,imgsize-1362748.cms",
      publishedAt: "2023-06-26T09:42:05Z",
      content:
        "Jun 26, 2023, 03:19PM ISTSource: TOI.inDuring a flight from Ranchi, former Indian cricket captain Mahendra Singh Dhoni was left blushing by a surprise encounter with an air hostess. The heartwarming … [+436 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Tech",
      title:
        "World's largest iPhone? From camera, FaceTime to buttons - it works just like one - HT Tech",
      description:
        "This YouTuber has made the world's largest iPhone that works just like any other iPhone.",
      url: "https://tech.hindustantimes.com/mobile/news/worlds-largest-iphone-from-camera-facetime-to-buttons-it-works-just-like-one-71687771128840.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/26/1600x900/iPhone_largest_1687771480279_1687771494343.PNG",
      publishedAt: "2023-06-26T09:25:40Z",
      content:
        'An 8-foot iPhone? It may sound unreal, but this YouTuber along with his team has actually made the world\'s largest "iPhone". Undoubtedly, large-sized smartphones have their own benefits. Last year, A… [+1469 chars]',
    },
    {
      source: { id: null, name: "Insightsonindia.com" },
      author: "Insights Editor",
      title:
        "Do dead stars crash with the light of 500 million suns? - INSIGHTSIAS - Insights IAS",
      description:
        "Source: TH  Context: Astrophysicists are studying the origins and nature of fast radio bursts (FRBs), powerful radio frequency emissions from distant galaxies, which last only milliseconds. Recent findings suggest that FRBs may be triggered by the collision o…",
      url: "https://www.insightsonindia.com/2023/06/26/do-dead-stars-crash-with-the-light-of-500-million-suns/",
      urlToImage: null,
      publishedAt: "2023-06-26T09:20:09Z",
      content: null,
    },
    {
      source: { id: null, name: "Inshorts.com" },
      author: null,
      title:
        "NASA recycles 98% of astronauts' urine & sweat into drinkable water on ISS - Inshorts",
      description:
        "NASA has announced that it is now recycling 98% of all water brought onboard the International Space Station by astronauts. For this, the space station's ECLSS system captures and collects moisture from astronauts' breath, sweat and urine. Using a new device …",
      url: "https://inshorts.com/en/news/nasa-recycles-98-of-astronauts-urine-sweat-into-drinkable-water-on-iss-1687770993129",
      urlToImage:
        "https://static.inshorts.com/inshorts/images/v1/variants/jpg/m/2023/06_jun/26_mon/img_1687766695283_445.jpg?",
      publishedAt: "2023-06-26T09:17:27Z",
      content: null,
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "etimes.in",
      title:
        "Anil Kapoor wishes Arjun Kapoor on his birthday; hilariously calls him 'Chachu' - See post - Indiatimes.com",
      description:
        "Anil Kapoor shares a sweet and hilarious post on Twitter for his nephew and actor Arjun Kapoor as he celebrates his 38th birthday today.",
      url: "https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/anil-kapoor-wishes-arjun-kapoor-on-his-birthday-hilariously-calls-him-chachu-see-post/articleshow/101277195.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-101277195,width-1070,height-580,imgsize-42196,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-26T09:17:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Asit Manohar",
      title:
        "ideaForge IPO: How Infosys may benefit from public issue of drone maker company? | Mint - Mint",
      description:
        "ideaForge IPO: Infosys holds 4.25% stake in the drone maker company, and is expected to benefit from the success of the IPO in the medium to long term, believe experts",
      url: "https://www.livemint.com/market/ipo/ideaforge-ipo-how-infosys-may-benefit-from-public-issue-of-drone-maker-company-11687765141107.html",
      urlToImage:
        "https://www.livemint.com/lm-img/img/2023/06/26/600x338/Infosys_ideaForge_IPO_stock_market_news_1687766255364_1687766255607.JPG",
      publishedAt: "2023-06-26T08:02:29Z",
      content:
        "ideaForge IPO: The initial public offering (IPO) of ideaForge technology Limited opened today and the public issue worth 567 crore received strong response by retail and other category investors. As … [+2868 chars]",
    },
    {
      source: { id: null, name: "Barca Blaugranes" },
      author: "Barca Blaugranes Staff",
      title:
        "Barcelona sign Ilkay Gundogan on free transfer after Man City exit - Barca Blaugranes",
      description: "The deal is done!",
      url: "https://www.barcablaugranes.com/2023/6/26/23773710/barcelona-sign-ilkay-gundogan-on-free-transfer-after-man-city-exit",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/OLbzFmsfQel-4p-V2k8WkJq5ids=/0x232:3240x1928/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24752514/1497497364.jpg",
      publishedAt: "2023-06-26T08:01:08Z",
      content:
        "© 2023 Vox Media, LLC. All Rights Reserved\r\nGambling Problem? Call (800) 327-5050 or visit gamblinghelpline.ma.org (MA), Call 877-8-HOPENY/text HOPENY (467369) (NY),\r\nIf you or someone you know has a… [+596 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "Press Trust of India",
      title:
        "On Sarfaraz Khan's Perceived 'Dig' At BCCI Selectors During Ranji Trophy Game, Report Claims This - NDTV Sports",
      description:
        "The current Indian team has a fitness criteria of 16.5 and Sarfaraz Khan has cleared it",
      url: "https://sports.ndtv.com/cricket/sarfaraz-khan-has-never-been-disrespectful-towards-anyone-report-4152874",
      urlToImage:
        "https://c.ndtvimg.com/2023-06/0ggve5bg_sarfaraz-khan_625x300_25_June_23.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-06-26T07:35:00Z",
      content:
        "Sarfaraz Khan's omission from the Indian team has been linked to fitness and disciplinary issues but sources in Mumbai cricket insisted that there was no truth in the claims. While it is perceived in… [+1631 chars]",
    },
    {
      source: { id: null, name: "Techlusive.in" },
      author: "Pranav Sawant",
      title:
        "Nothing Phone (2) pre-orders start on June 29 in India - Techlusive",
      description:
        "Those who pre-order the Nothing Phone (2) will get 50 percent off on Ear (stick) and Nothing accessories (with an asterisk).",
      url: "https://www.techlusive.in/mobile-phones/nothing-phone-2-pre-order-begin-on-june-29-on-flipkart-1385954/",
      urlToImage:
        "https://st1.techlusive.in/wp-content/uploads/2023/06/Nothing-Phone-2-5.jpg",
      publishedAt: "2023-06-26T07:26:46Z",
      content:
        "Nothing is all set to launch the Phone (2) globally including the Indian region. Ahead of its release, the company has revealed the pre-order details for the phone. Nothing Phone (2) will go on pre-o… [+2446 chars]",
    },
    {
      source: { id: null, name: "The Tribune India" },
      author: "The Tribune India",
      title:
        "Long traffic jam on Chandigarh-Manali highway as road is blocked following landslides - The Tribune India",
      description: "gtkgtkgtk",
      url: "https://www.tribuneindia.com/news/himachal/long-traffic-jam-on-chandigarh-manali-highway-as-road-is-blocked-following-landslides-520394",
      urlToImage: null,
      publishedAt: "2023-06-26T07:13:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Tech",
      title:
        "iPhone 15 Pro Max case leak hints at Mute button makeover - HT Tech",
      description:
        "iPhone 15 Pro Max case leaked ahead of launch! Here is what it suggests.",
      url: "https://tech.hindustantimes.com/mobile/news/iphone-15-pro-max-case-leak-hints-at-mute-button-makeover-71687761197937.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/26/1600x900/iPhone_15_Pro_Max_case_1687762708751_1687762719541.jpg",
      publishedAt: "2023-06-26T06:59:24Z",
      content:
        "As we are nearing the launch of the iPhone 15 series, the leaks and rumours are picking up pace. Several tipsters have released renders which suggest the possible design of the upcoming iPhone models… [+1693 chars]",
    },
    {
      source: { id: null, name: "Rediff.com" },
      author: "Lalit K Jha",
      title:
        "Biden tweets on 'most consequential' US-India friendship, Modi replies - Rediff.com",
      description:
        "Prime Minister Modi's visit saw India and the US signing several major deals to boost cooperation in key areas such as defence, space and trade.",
      url: "https://www.rediff.com/news/report/biden-tweets-on-us-india-friendship-modi-replies/20230626.htm",
      urlToImage: "https://im.rediff.com/news/2023/jun/26biden-modi.jpg",
      publishedAt: "2023-06-26T06:53:09Z",
      content:
        'The US-India relationship is among the "most consequential" in the world with bilateral ties more dynamic than ever, United States President Joe Biden has said after the two countries elevated their … [+3478 chars]',
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "TIMESOFINDIA.COM",
      title:
        "CM Arvind Kejriwal demands LG VK Saxena's resignation over Pragati Maidan robbery - Indiatimes.com",
      description:
        "Two days after a delivery agent and his associate were allegedly robbed of Rs 2 lakh by four bike-borne miscreants inside the Pragati Maidan tunnel in",
      url: "https://timesofindia.indiatimes.com/city/delhi/cm-arvind-kejriwal-demands-lg-vk-saxenas-resignation-over-pragati-maidan-robbery/articleshow/101272793.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-101272873,width-1070,height-580,imgsize-27402,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-26T06:52:00Z",
      content: null,
    },
    {
      source: { id: null, name: "Crictoday.com" },
      author: "CT Contributor",
      title:
        "'If BCCI is actually serious about fitness, they should first sack Rohit Sharma and lock him in a gym' - Crictoday.com (Cricket News) ",
      description:
        "The remarks haven't found support and fans are slamming the apex body for not talking about Rohit Sharma's fitness.",
      url: "http://crictoday.com/cricket/news/if-bcci-is-actually-serious-about-fitness-they-should-first-sack-rohit-sharma-and-lock-him-in-a-gym/",
      urlToImage:
        "https://crictoday.com/wp-content/uploads/2023/06/rohit-1-1024x576-1-1024x576-1.webp",
      publishedAt: "2023-06-26T06:33:28Z",
      content:
        "Sarfaraz Khan was not considered for the upcoming two-match Test series against the West Indies. He has been a top performer for Mumbai in domestic cricket. Former India players have lambasted The Bo… [+1181 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Moneycontrol News",
      title:
        "Russia News Live Updates: Russia-Ukraine conflict intensifies, with sporadic clashes in Idlib - Moneycontrol",
      description:
        "Russia News Live updates - The Russia-Ukraine conflict continues with tensions high, sporadic clashes, and ongoing diplomatic efforts for a peaceful resolution.",
      url: "https://www.moneycontrol.com/news/opinion/russia-news-live-updates-russia-ukraine-conflict-is-that-tensions-remain-high-with-sporadic-clashes-continuing-10855411.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/06/Russia-VS-Ukraine-770x433.jpg",
      publishedAt: "2023-06-26T06:26:04Z",
      content:
        "In response to the recent armed insurrection led by Yevgeny Prigozhin, the Russian rouble has opened at its lowest level against the dollar in nearly 15 months. As of 0415 GMT, the rouble was down 2.… [+388 chars]",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "HT Tech",
      title:
        "Spectacular ultraviolet views of Mars revealed by NASA's MAVEN spacecraft - HT Tech",
      description:
        "NASA's MAVEN spacecraft captures stunning ultraviolet images of Mars, revealing unique details about its atmosphere and seasonal variations.",
      url: "https://tech.hindustantimes.com/photos/spectacular-ultraviolet-views-of-mars-revealed-by-nasas-maven-spacecraft-71687758556572.html",
      urlToImage:
        "https://images.hindustantimes.com/tech/img/2023/06/26/1600x900/Mars_image_1687758649816_1687758650037.png",
      publishedAt: "2023-06-26T05:59:00Z",
      content:
        "Top SectionsExplore Tech Copyright © HT Media Limited All rights reserved.",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Shivam Shukla",
      title:
        "Adani ports trades flat post resignation of director - Moneycontrol",
      description:
        "Adani Ports and Special Economic Zone Ltd stock has lost 10.92 percent of its value over the last six months. Thus, considerably underperforming the benchmark Nifty50 index which has given a return 3.62 percent over the same duration.",
      url: "https://www.moneycontrol.com/news/business/markets/adani-ports-trades-flat-after-director-debarks-and-group-shares-sink-10856891.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2012/05/adani ports - slide_50250640.jpg",
      publishedAt: "2023-06-26T05:43:48Z",
      content:
        "Shares of Adani ports traded flat after the resignation of Ranjitsinh B Barad as director. At 10:21am, the stock was trading 0.18 percent higher at Rs 715.05 on the NSE.\r\nAccording to a BSE filing by… [+2262 chars]",
    },
    {
      source: { id: null, name: "Business Standard" },
      author: null,
      title:
        "Infosys inks $454 mn deal with Danske Bank; to acquire its India IT centre - Business Standard",
      description:
        "Infosys Danske Bank Deal: The deal is estimated at $454 million for a period of 5 years with an option to renew for one additional year for a maximum of three times",
      url: "https://www.business-standard.com/companies/news/infosys-danske-bank-deal-infosys-inks-454-mn-deal-with-danske-bank-to-acquire-its-india-it-centre-123062600166_1.html",
      urlToImage:
        "https://bsmedia.business-standard.com/_media/bs/img/article/2022-04/13/full/1649873871-5587.jpg",
      publishedAt: "2023-06-26T05:31:34Z",
      content:
        "Unsubscribe to continue\r\nThis is a subscriber only feature Subscribe Now to get daily updates on WhatsApp",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Preeti Kulkarni",
      title:
        "Your last chance to apply for a higher EPF pension ends tonight. Here’s what you need to know - Moneycontrol",
      description:
        "The June 26 deadline to apply for higher pension on actual basic salary instead of the statutory limit of Rs 15,000 is here. Here’s everything you need to know about eligibility, the procedure and calculation. Is it worth your while?",
      url: "https://www.moneycontrol.com/news/business/personal-finance/your-last-chance-to-apply-for-a-higher-epf-pension-ends-tonight-heres-what-you-need-to-know-10856851.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2023/05/pension-rep-770x433.jpg",
      publishedAt: "2023-06-26T05:31:10Z",
      content:
        "Today, June 26, is the last day to apply for higher pension on your actual basic salary, unless the labour ministry and Employees Provident Fund Organisation (EPFO) decide to extend the deadline as t… [+6679 chars]",
    },
  ];
  constructor() {
    super();
    console.log("This is News Component COnstructor");
    this.state = {
      articles : this.articles,
      loading : false 
    }
  }
  render() {
    return (
      <>
        <div className="container my-3 ">
          <h2>Top Headlines</h2>
          <div className="row">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0,40)} description={element.description.slice(0,66)} imgUrl={element.urlToImage} newsUrl={element.url} />
              </div>
              
            })}


          </div>
        </div>
      </>
    );
  }
}

export default News;
