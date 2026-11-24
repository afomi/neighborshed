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
   It is short, and every convention has its own link you can point to.
2. **Map your steps to the life of a share.**
   Name the step in your app, form or process that matches each of offer, ask, agree, share, use, return and close.
3. **Check each convention.**
   For each one, note whether you follow it, follow it in part, or don't yet.
   Start with every **must**.
4. **Say so publicly.**
   Publish a short conformance note, on your site or in your docs, that names the protocol version and lists the conventions you follow, each linked to the protocol.
5. **Tell people what to expect.**
   Put the pledge where borrowers will see it before they ask:

> Take good care of what you borrow.
> Keep in touch, bring it back on time, and if it breaks, work it out with the owner.

### Without software

A group can follow the protocol with a shared spreadsheet or a printed sheet by the door.
Keep one row per share with the thing, the borrower, the dates, and a condition note when it is shared and when it is returned.
Keep the sheet where only the people who run it can see it, because [who borrowed what stays private](/protocol/#ns-24).

## What conforming means

An implementation **conforms to NeighborShed v0.1** when it meets every **must** in the conventions that apply to what it does.
A convention applies unless the implementation doesn't offer that feature at all.
For example, an app with no deposits has nothing to meet in the [rules on deposits](/protocol/#ns-12), and still conforms.

An implementation that meets some musts but not yet all of them **implements NeighborShed v0.1 in part**, and its conformance note lists which conventions it meets.
That is a fine place to start: most implementations will begin there.

Conformance is self-declared.
There is no certification, fee or logo program.
If you believe a listed implementation doesn't do what its note says, open an issue so it can be corrected.

A conformance note can be as short as this:

> Implements the NeighborShed protocol v0.1 in part.
> Meets: [Sharing is opt-in](/protocol/#ns-1), [The lender decides each loan](/protocol/#ns-7), [No is a complete answer](/protocol/#ns-8) and [Who borrowed what stays private](/protocol/#ns-24).
> Not yet: [Trust is personal and named](/protocol/#ns-25).

## Propose a change {#propose-a-change}

The protocol improves through use.
If a convention doesn't fit how real neighbors lend, or something important is missing, propose a change in the [issues on GitHub](https://github.com/afomi/neighborshed/issues).

A good proposal:

- names the convention it changes and links to it, for example "[Share somewhere that feels safe](/protocol/#ns-14): sharing through a lockbox", or says "New convention";
- describes the situation from the point of view of a lender or a borrower;
- suggests wording;
- says where you've tried it, if you have.

How changes are handled:

- Wording changes and new conventions are discussed in the open, then published in the next version.
- A new convention gets the next unused number, so its link never changes.
- A convention that is withdrawn stays listed, marked "withdrawn", so existing links still work.
- Version numbers stay below 1.0 while the protocol is a draft.

## Implementations {#implementations}

Projects that implement the protocol, in full or in part.
To add yours, open an issue with its name, link, what kind of project it is, and its conformance note.

### Qart

[qart.app](https://qart.app) keeps an inventory of a person's or an organization's things, private until the owner chooses to show one.
One of those choices is to lend an item to the people nearby.

Status: implements NeighborShed v0.1 in part.
As checked against Qart's code by the Qart project, November 2026.

What Qart does today:

- **[Sharing is opt-in](/protocol/#ns-1).**
  Lending is off until an owner turns it on for an item, and it can be paused.
- **[Say how to care for it](/protocol/#ns-3).**
  Each item can carry a care note that borrowers read before asking.
- **[Show how many are free](/protocol/#ns-5).**
  An item can have a quantity, with a live count of how many are free.
- **[Ask plainly](/protocol/#ns-6).**
  A request says how many, roughly when, and a note.
- **[The lender decides each loan](/protocol/#ns-7), and [no is a complete answer](/protocol/#ns-8).**
  The owner approves or declines each request, with no reason needed.
  For an organization's items, its owners and admins decide.
- **[Pickup details go only to the agreed borrower](/protocol/#ns-13).**
  The pickup note appears once a request is approved, only for that borrower, and stays visible while the item is out.
- **[Show nearness, never location](/protocol/#ns-23).**
  Neighbors are found by a rough area of about a kilometer.
  The exact point is never stored or logged.
- **[Who borrowed what stays private](/protocol/#ns-24).**
  A loan is seen only by the two people in it.

In part:

- **[Both sides see the same terms](/protocol/#ns-10).**
  Both see the same loan record, with dates, quantity and notes, but no other agreed terms yet.
- **[Both sides confirm the return](/protocol/#ns-19).**
  Either side can mark an item returned, and the record shows who did.
  The other side doesn't confirm it yet, and there are no return reminders.
- **[Your shed is yours to take](/protocol/#ns-26).**
  People can delete items or stop sharing at any time.
  There is no export of lending history yet.

Not yet:
[condition notes](/protocol/#ns-2) at the offer and [when shared](/protocol/#ns-15),
a [nudge to answer in good time](/protocol/#ns-9),
[program loan terms](/protocol/#ns-11),
[deposits](/protocol/#ns-12),
[vouching](/protocol/#ns-25),
and [tips and contributions](/protocol/#gratitude-and-contributions).

Qart doesn't make claims about the conventions on how people behave, such as [using it as agreed](/protocol/#ns-16) or [making it right together](/protocol/#ns-20).
It will claim [Anyone can take part](/protocol/#ns-27) after an accessibility review.
