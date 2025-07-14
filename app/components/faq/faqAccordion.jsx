"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";

export function FaqAccordionClient({ items = [] }) {
  return (
    <Accordion>
      {items.map((item, idx) => (
        <AccordionItem key={idx}>
          <AccordionItemHeading>
            <AccordionItemButton>{item.question}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{item.answer}</p>
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
