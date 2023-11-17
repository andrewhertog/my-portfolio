import { Navigation } from "../components/nav";
import { Metadata } from 'next'
import { Card } from  '../components/card'
import parse, { HTMLReactParserOptions } from 'html-react-parser';
import Link from "next/link";

var xml2js = require("xml2js");
export const metadata: Metadata = {
    title: 'Blog',
}

const mediumXml = "https://www.medium.com/@andrewhertog/feed"

async function getXml(): Promise<string> {
    const request: RequestInfo = new Request(mediumXml)
    const res = await fetch(request);
    const data = await res.text();
    return data;
}
function parseXml(data: any ): any {
    var parser = xml2js.Parser();
    var res = parser.parseStringPromise(data).then(function (result: any) {
        return result;
      })
      .catch(function (err: any) {
        console.log(err);
      });
    return res;
}

export default async function Blog() {
    var rss = await getXml().then(data => parseXml(data));
    var items = rss.rss.channel[0].item
    return ( 
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <Navigation />
            <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
            <div className="max-w-2xl mx-auto lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
						Blog Articles
					</h2>
					<p className="mt-4 text-zinc-400">
                        Here are some of the blog articles I have written. Enjoy!
					</p>
				</div>
                {items.map((item: any) => (
                    <Card>
                        <Article details={item}>
                        </Article>
                    </Card>
                ))}
            </div>
        </div>
    );
}


const htmlParseOptions : HTMLReactParserOptions = {
    replace({attribs, children}) {
        if (!attribs) {
            return;
        }
        if (attribs.class === "medium-feed-image") {
            return <></>;
        }
        if (attribs.class === "medium-feed-link") {
            return <></>;
        }
    },
}

function Article(details: any) {
    var item = details.details;
    var description
    var membership = false;
    var link = item.link[0].slice(0,item.link[0].indexOf('source')) + 'source=denhertog.ca';
    if (item['content:encoded']) {
        description = item['content:encoded'][0]
            .slice(0,item['content:encoded'][0]
                .indexOf('</h4>'))
            .replace('<h4>','');
    }
    if (item['description']) {
        membership = true;
        description = item['description'][0]
    }
    return (
        <Link href={link}>
            <div className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                    <div className="text-xs text-zinc-100">
                        {item.pubDate[0]}
                    </div>
                </div>
                <div className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display">
                    {item.title[0]}
                </div>
                <div className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                    {parse(description,htmlParseOptions)}
                </div>
            </div>
        </Link>
    )
}

