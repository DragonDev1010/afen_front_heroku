import React from "react";
import Container from "@/design-system/Container";
import Title from "@/design-system/Title";
import Text from "@/design-system/Text";
import Image from "next/image";
import SubTitle from "@/design-system/SubTitle";
import TokenPageTabs from "@/pages/token";
import { BidProps } from "@/pages/token/TokenBids";
import { TokenHistoryProps } from "@/pages/token/TokenHistory";
import { TokenDetailsProps } from "@/pages/token/TokenDetails";
import { ArrowSmUpIcon, ArrowSmDownIcon } from "@heroicons/react/solid";
import { ClockIcon } from "@heroicons/react/outline";
import Button from "@/design-system/Button";

// getStaticPaths
// getStaticProps

export default function Token() {
  const bids: BidProps[] = [
    {
      name: "AdeolaIn",
      amount: 4.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Victor",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Odinak",
      amount: 5.5,
      image:
        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
  ];

  const tokenHistory: TokenHistoryProps[] = [
    {
      date: "05/04/2021 10:48:13 PM",
      by: {
        address: "i03j2qT7UCQw9SD85qXPrE81",
        name: "Yusuf Aina",
      },
      event: "Minted",
    },
  ];

  const tokenDetails: TokenDetailsProps = {
    owner: {
      firstName: "Willie Porter",
      walletAddress: "cdm0GO1W3xMv0Oaxco",
      image:
        "https://images.unsplash.com/photo-1619535542157-77b5c650347d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBhcnR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    },
    creator: {
      firstName: "Yusuf Aina",
      walletAddress: "O4Qi1ssZEvP2RNB4la",
    },
    dimensions: {
      width: 10,
      height: 42.1,
      depth: 4.3,
    },
    mintDate: "05/03/2021 01:42:13 PM",
    created: "03/03/2021 01:42:13 PM",
  };

  return (
    <div>
      <div className="bg-white dark:bg-gray-700 overflow-x-scroll w-full">
        <Container style="py-2 uppercase text-black dark: text-xs flex justify-between whitespace-nowrap overflow-x-auto">
          <div className="inline-flex">
            <Text style="dark:text-white mx-5 md:mx-0">
              <span className="dark:text-gray-400">Minted:</span> 3 months ago
            </Text>
          </div>
          <div className="inline-flex items-center">
            <ClockIcon
              className={`mr-1 h-4 w-4 text-white group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
            <Text style="dark:text-white mx-5 md:mx-0">
              <span className="dark:text-gray-400">Auction Ends:</span> In 5hrs
            </Text>
          </div>
          <div className="inline-flex mx-5 md:mx-0">
            <ArrowSmUpIcon
              className={`ml-2 h-4 w-4 text-green-400 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
            <Text style="dark:text-green-400">Bids: 5</Text>
          </div>
          <div className="inline-flex mx-5 md:mx-0">
            <ArrowSmDownIcon
              className={`ml-2 h-4 w-4 text-red-400 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
            <Text style="dark:text-red-400">Latest Bid: 0.95 BNB</Text>
          </div>
          <div className="inline-flex mx-5 md:mx-0">
            <ArrowSmUpIcon
              className={`ml-2 h-4 w-4 text-green-400 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
              aria-hidden="true"
            />
            <Text style="dark:text-green-400">Highest Bid: 1.4 BNB</Text>
          </div>
        </Container>
      </div>
      <Container style="pt-20 lg:h-screen">
        <div className="flex flex-wrap-reverse lg:flex-nowrap lg:h-4/5 justify-between">
          <div className="lg:w-2/6 flex flex-col">
            {/* <Text>{id}</Text> */}
            <div className="flex justify-between items-start mb-8">
              <div>
                <Title style="">Minding my business</Title>
                <SubTitle style="text-gray-500 inline-flex mt-1">
                  <div className="w-6 h-6 relative overflow-hidden rounded-full mr-1">
                    <Image
                      src={
                        "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                      }
                      layout="fill"
                      objectFit="none"
                    ></Image>
                  </div>
                  Yusuf Aina
                </SubTitle>
              </div>
              <div className="text-right inline-flex items-start">
                <div>
                  <ArrowSmUpIcon
                    className={`ml-2 h-8 w-8 text-green-400 group-hover:text-opacity-80 transition ease-in-out duration-150 cursor-pointer`}
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <Text style="text-white text-3xl font-bold">1.4 BNB</Text>
                  <Text size="x-small" style="text-afen-yellow">
                    <span>~₦134k</span>
                  </Text>
                </div>
              </div>
            </div>

            <Text style="font-light md:text-sm">
              A one of six-piece series reflecting on different aspects of the
              Covid-19 pandemic, from the less privileged to the high rates of
              daily deaths recorded causing an overwhelming panic and grief in
              the world. This series is a campaign act in favor of the voiceless
              and powerless.
            </Text>

            <div className="mt-5">
              <TokenPageTabs
                bids={bids}
                history={tokenHistory}
                details={tokenDetails}
              />
            </div>

            <div className="mt-auto mb-10 md:mb-0 pt-6 ">
              <div className="flex justify-between">
                {/* <button className="px-6 py-3 rounded-2xl bg-white dark:text-black font-semibold w-full">
                  Buy Now
                </button> */}
                <Button type="primary" block>
                  Bid
                </Button>
              </div>
            </div>
          </div>
          <div className="h-96 w-11/12 mb-10 lg:mb-0 lg:h-full lg:w-4/6">
            <div className="relative h-full min-w-full">
              <Image
                src={"/minding-my-business.jpeg"}
                layout="fill"
                className="border-8 border-gray-900 rounded-lg overflow-hidden"
                objectFit="contain"
                objectPosition="fill"
                alt={"alt"}
              ></Image>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
