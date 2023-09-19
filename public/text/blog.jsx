import { Button } from "@material-tailwind/react";


const articles = [
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