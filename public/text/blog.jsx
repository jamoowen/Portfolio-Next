import { Button } from "@material-tailwind/react";


const articles = [
    {
        header: "Ethereum layer 2 scaling solutions: Zero Knowledge and Optimistic rollups explained.",
        body:
            <>
                <a href="https://medium.com/@jamesowen.dev/ethereum-layer-2-scaling-solutions-zero-knowledge-and-optimistic-rollups-explained-ab4eebadca76" target="_blank">
                    <Button size="sm" color="blue" className="mb-2 " >
                        Full article
                    </Button>
                </a>

                <div>
                Rollups are an Ethereum layer 2 scaling solution that takes computation off-chain, improving transaction 
                speed and significantly reducing gas fees. Although rollups perform their work off-chain, they keep transaction 
                data on the Ethereum mainnet and are thus able to derive security from it, maintaining trust. Zero Knowledge 
                rollups work by using validity proofs to verify that the off-chain transactions are genuine but are 
                complicated to implement and computationally expensive. Optimistic rollups assume that all transactions are 
                genuine and allow users to challenge transaction legitimacy, triggering fraud proofs that have the ability 
                to roll transactions back.
                </div>
            </>
    },
    {
        header: "Real World Asset tokenization: The future of financial markets?",
        body:
            <>
                <a href="https://medium.com/@jamesowen.dev/real-world-asset-tokenization-the-future-of-financial-markets-f19aa23c039e" target="_blank">
                    <Button size="sm" color="blue" className="mb-2 " >
                        Full article
                    </Button>
                </a>

                <div>
                The tokenization of Real World Assets (RWA's), is a way of enabling on-chain ownership of traditional assets 
                that exist in traditional finance. Tokenizing these assets leverages the blockchain to enable faster 
                settlements, fewer fees, greater transparency, etc. They pose an enticing investment for Defi users, who 
                can now better diversify their crypto portfolios and gain exposure to other markets. They have shown tremendous 
                growth in 2023, even gaining the attention of BlackRock CEO Larry Fink, who stated: 
                “The next generation for securities will be tokenization”.

                </div>
            </>
    },
    {
        header: "EigenLayer: An ETH restaking protocol supercharging off-chain security",
        body:
            <>
                <a href="https://medium.com/@jamesowen.dev/eigenlayer-an-eth-restaking-protocol-supercharging-off-chain-security-04897f4e3154" target="_blank">
                    <Button size="sm" color="blue" className="mb-2 " >
                        Full article
                    </Button>
                </a>

                <div>
                EigenLayer is an Ethereum layer 2 protocol which enables restaking — a process of reusing staked ETH or 
                Liquid Staking Tokens (LST) to extend Ethereum's security features to off-chain Actively Validated Services (AVS's). 
                EigenLayer's goal is to improve security, flexibility, scalability and allow for more efficient development across the 
                Ethereum ecosystem.
                </div>
            </>
    },
    {
        header: "Sending emails with Next.js 13 and Nodemailer",
        body:
            <>
                <a href="https://medium.com/@jamesowen.dev/how-to-send-email-forms-using-next-js-13-with-nodemailer-1bc9e5dd5e80" target="_blank">
                    <Button size="sm" color="blue" className="mb-2 " >
                        Full article
                    </Button>
                </a>

                <div>
                    A tutorial on how you can create Email forms, using Next.js 13 and Nodemailer. The tutorial requires
                    basic prerequisite knowledge of Next.js or React, basic HTML and basic api requests. The tutorial is comprehensive and
                    covers project initialisation, package installation, api endpoint creation etc. The tutorial can be used with
                    any email provider, granted they use SMTP. The tutorial does not take styling or other optimizations into
                    consideration and only provides the knowledge on how to create a form, which will send an email message
                    to a given account.
                </div>
            </>
    },
    
]
// const BreadthFirstSearchProject = <>
// <a className="font-bold  text-xl" href="https://github.com/jamoowen/breadth_first_search/" target="_blank">Six Degrees of Separation:</a> <br/>
// <a className="font-bold  text-purple-500" href="https://github.com/jamoowen/breadth_first_search/" target="_blank">Github link </a> <br/>
// This was a project I completed to satisfy my curiousity of searching Algorithms and what they are used for in practice.
//  <br/>
//  The Projects implements the breadth first search algorith, to find the shortest link between any two Hollywood actors.
//  It uses an IMDB data source and can prove that there is a maximum of six degrees of Separation between actors. Whilst 
//  testing, I found that there was mostly only two to three degrees of separation between most actors which I found extremely 
//  Interesting.

// </>

export { articles };