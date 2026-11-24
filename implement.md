---
layout: page
title: "Implement it"
kicker: "For apps, programs and groups"
permalink: /implement/
description: "How an app, a city loan program or a neighborhood group adopts the NeighborShed protocol, what conforming means, how to propose changes, and who implements it today."
lede: >-
  The protocol is meant to be copied.
  Here is how to adopt it, say how closely you follow it, and help it improve.
---

## Who this is for

Anyone who helps people lend and borrow: an app with a lending feature, a library of things, a tool library, a tenants' association, a city or county equipment loan program, or a block that keeps a shared list.
You don't need software to follow the protocol, and you don't need permission to adopt it.

## How to adopt it

1. **Read the [protocol](/protocol/).**
   It is short, and every convention has an id you can point to.
2. **Map your steps to the life of a share.**
   Name the step in your app, form or process that matches each of offer, ask, agree, share, use, return and close.
3. **Check each convention.**
   For each one, note whether you follow it, follow it in part, or don't yet.
   Start with every **must**.
4. **Say so publicly.**
   Publish a short conformance note, on your site or in your docs, that names the protocol version and lists the ids you follow.
5. **Tell people what to expect.**
   Put the pledge where borrowers will see it before they ask:

> Treat every tool with care.
> Communicate, return on time, and if you break it, work with the owner to make it right.

### Without software

A group can follow the protocol with a shared spreadsheet or a printed sheet by the door.
Keep one row per share with the thing, the borrower, the dates, and a condition note when it is shared and when it is returned.
Keep the sheet where only the people who run it can see who borrowed what (NS-24).

## What conforming means

An implementation **conforms to NeighborShed v0.1** when it meets every **must** in the conventions that apply to what it does.
A convention applies unless the implementation doesn't offer that feature at all.
For example, an app with no deposits has nothing to meet in NS-12's deposit rules, and still conforms.

An implementation that meets some musts but not yet all of them **implements NeighborShed v0.1 in part**, and its conformance note lists which ids it meets.
That is a fine place to start: most implementations will begin there.

Conformance is self-declared.
There is no certification, fee or logo program.
If you believe a listed implementation doesn't do what its note says, open an issue so it can be corrected.

A conformance note can be as short as this:

> Implements the NeighborShed protocol v0.1 in part: NS-1, NS-3, NS-5, NS-6, NS-7, NS-8, NS-13, NS-23.
> Not yet: NS-11, NS-25.

## Propose a change {#propose-a-change}

The protocol improves through use.
If a convention doesn't fit how real neighbors lend, or something important is missing, propose a change in the [issues on GitHub](https://github.com/afomi/neighborshed/issues).

A good proposal:

- names the convention it changes by id, for example "NS-14: sharing through a lockbox", or says "New convention";
- describes the situation from the point of view of a lender or a borrower;
- suggests wording;
- says where you've tried it, if you have.

How changes are handled:

- Wording changes and new conventions are discussed in the open, then published in the next version.
- A new convention gets the next unused id.
- A convention that is withdrawn stays listed with its id marked "withdrawn", so existing citations still resolve.
- Version numbers stay below 1.0 while the protocol is a draft.

## Implementations {#implementations}

Projects that implement the protocol, in full or in part.
To add yours, open an issue with its name, link, what kind of project it is, and its conformance note.

### Qart

[qart.app](https://qart.app) keeps an inventory of a person's or an organization's things, private until the owner chooses to show one.
One of those choices is to lend an item to the people nearby.

Status: implements NeighborShed v0.1 in part.
As checked against Qart's code by the Qart project, November 2026:

- Lending is off until an owner turns it on for an item, and can be paused (NS-1).
- Each item can carry a care note borrowers read before asking (NS-3), and a quantity with a live count of how many are free (NS-5).
- A request says how many, roughly when, and a note (NS-6).
- The owner approves or declines each request, with no reason needed; for an organization's items, its owners and admins decide (NS-7, NS-8).
- The pickup note is shown only to the borrower, once the request is approved, and stays visible while the item is out (NS-13).
- Neighbors are found by a coarse area of about a kilometer; the exact point is never stored or logged (NS-23).
- A loan is seen only by its two sides (NS-24).

In part:

- Both sides see the same loan record, with dates, quantity and notes, but no other agreed terms (NS-10).
- Either side can mark an item returned, and the record shows who did; the other side doesn't confirm it yet, and there are no return reminders (NS-19).
- People can delete items or stop sharing at any time; there is no export of lending history yet (NS-26).

Not yet: condition notes at the offer and when shared (NS-2, NS-15), a nudge to answer in good time (NS-9), program loan terms (NS-11), deposits (NS-12), vouching (NS-25), and tips or contributions (NS-29 to NS-33).

Not claimed: the conventions about how people behave (NS-4, NS-14, NS-16 to NS-18, NS-20 to NS-22), NS-27, pending an accessibility review, and NS-28.
