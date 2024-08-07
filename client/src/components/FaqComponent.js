import React from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function FaqComponent() {
  return (
    <div className="my-20 md:mx-32 mx-8">
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>What is FundBux?</AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              FundBux platform is designed to connect passionate individuals
              with meaningful campaigns, enabling everyone to contribute to the
              betterment of society.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>
            To whom all the contributions goes to?
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              All of the contributions on the FundBux platform on a certain
              Campaigns is contributed straight to the campaign creators with a
              3 percent platform fee for the maintainance of the site.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Check out the "
              <Link
                to="/donate"
                className="text-cyan-600 hover:underline dark:text-cyan-500"
              >
                contribution
              </Link>
              " page to know more about the contributions policy and activities.
            </p>
          </AccordionContent>
        </AccordionPanel>
        <AccordionPanel>
          <AccordionTitle>
            How can create my own campaigns on FundBux?
          </AccordionTitle>
          <AccordionContent>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              To create a Campaign on FundBux, you first need to Sign In to the
              platform and then you can start your campaign from the different
              categories available in the <Link to="/"> create campaign </Link>{" "}
              page of the platform.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
}
