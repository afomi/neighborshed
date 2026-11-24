---
layout: page
title: "The NeighborShed protocol"
kicker: "Version 0.1, draft"
permalink: /protocol/
lifecycle_nav: true
description: "A readable spec for lending and borrowing among neighbors: roles, the life of a share, and conventions with stable ids (NS-1 to NS-33)."
lede: "The conventions that make lending between neighbors work, written so people can follow them and apps can implement them."
---

## About this document

This is a draft.
It describes how neighbors lend and borrow things in a way that keeps trust high and the next yes easy.
It applies whether a loan is tracked on paper, in a group chat, in a city equipment program, or in an app.

Each convention has a short id, such as **NS-7**.
Ids are stable: a convention may be reworded or withdrawn, but its id is never reused for something else.
Cite a convention by its id and version, for example "NS-7 (v0.1)", or link to it directly, for example `https://neighborshed.app/protocol/#ns-7`.

### Words with a specific meaning

**Must** marks a requirement: an implementation that skips it does not conform.
**Should** marks a strong recommendation: skip it only for a good reason you can explain.
**May** marks something that is allowed and optional.
These follow the usage in [RFC 2119](https://www.rfc-editor.org/rfc/rfc2119) and [RFC 8174](https://www.rfc-editor.org/rfc/rfc8174), and they appear only where the difference matters.

Conventions about how people behave are written to people.
Conventions about what software or a program does are written to the **implementation**: the app, program or group process that keeps track of shares.

## Roles

**Lender.**
The person or organization that owns a thing and decides whether to lend it.
An organization, such as a city loan program, a shop or a household, acts through the people it authorizes.

**Borrower.**
The person who asks to use a thing and is responsible for it while they have it.

**Circle.**
The people a lender chooses to show a thing to.
A circle may be the neighbors around you, a building, a block, a club, or everyone a city program serves.

**Shed.**
The things a lender offers to a circle, together with their notes.

**Steward.**
Anyone who runs a circle or an implementation: a program coordinator, a building organizer, the people who operate an app.
A circle does not need a steward, and a steward never decides a loan on a lender's behalf unless the lender is the steward's own organization.

## The life of a share

A **share** is one loan of one or more units of a thing, from the ask to the close.

| Step | State | What happens |
|---|---|---|
| Offer | offered | A lender shows a thing to a circle. |
| Ask | requested | A borrower asks for it, with dates and a note. |
| Agree | agreed, or declined | The lender says yes or no. The borrower may cancel until the thing is shared. |
| Share | out | The lender shares the thing with the borrower, and both note its condition. |
| Use | out | The borrower uses it as agreed. |
| Return | returned | The thing comes back, and both confirm it. |
| Close | closed | Any problem is settled, and the share is done. |

Implementations may use their own names for these states, as long as each maps to one step above.

## Offer

### <span class="convention-id">NS-1</span> Sharing is opt-in
{: #ns-1 .convention}

Nothing is shared by default.
A lender chooses each thing to offer and the circle that can see it.
A lender may pause or stop offering a thing at any time, without giving a reason, and open shares are unaffected.

### <span class="convention-id">NS-2</span> Describe the condition honestly
{: #ns-2 .convention}

An offer must describe the thing's condition, including any known faults, missing parts or quirks.
A photo should accompany the description when practical.
An honest description is the baseline everyone returns to if something goes wrong.

### <span class="convention-id">NS-3</span> Say how to care for it
{: #ns-3 .convention}

A lender may add a care note, such as "charge the battery after use" or "clean the blade before returning".
The borrower must be able to read the care note before asking.

### <span class="convention-id">NS-4</span> Flag anything that can hurt someone
{: #ns-4 .convention}

Things that can injure someone, such as power tools, ladders and anything with a blade or fuel, should carry a safety note: required protective gear, skills, age limits or known hazards.
A lender must not offer a thing they know is unsafe or under a safety recall.

### <span class="convention-id">NS-5</span> Show how many are free
{: #ns-5 .convention}

When a lender has several of the same thing, the offer should show how many are free right now, for example "18 of 25 available".
Units that are agreed or out count as taken.

## Ask

### <span class="convention-id">NS-6</span> Ask plainly
{: #ns-6 .convention}

A request states which thing, how many, when the borrower needs it, when they will return it, and a short note on what it's for.
A short note goes a long way: it helps the lender say yes.

### <span class="convention-id">NS-7</span> The lender decides each loan
{: #ns-7 .convention}

A request is never a loan until the lender agrees to it.
An implementation must not treat a request as agreed without the lender's yes.
A lender may set up standing approval for specific people they already trust.
For an organization's things, only the people the organization authorizes may decide.

### <span class="convention-id">NS-8</span> No is a complete answer
{: #ns-8 .convention}

A lender may decline any request without giving a reason.
A borrower may cancel a request any time before the thing is shared.
An implementation must not penalize either side for declining or cancelling, and must not show a decline to anyone outside the share.

### <span class="convention-id">NS-9</span> Answer in good time
{: #ns-9 .convention}

A lender should answer a request before the borrower's start date, even if the answer is no.
An implementation should close a request that is still unanswered when its start date passes, and tell both sides.

## Agree

### <span class="convention-id">NS-10</span> Both sides see the same terms
{: #ns-10 .convention}

Once a lender agrees, both sides must be able to see the same record of the share: the thing, how many, the return date, the care and safety notes, and any terms or deposit.
If the terms change, both sides see the change.

### <span class="convention-id">NS-11</span> Program terms are explicit and recorded
{: #ns-11 .convention}

A program or organization may require a borrower to accept written loan terms, such as use only for the stated purpose, return clean, or cover the cost of repair.
The terms must be shown before the request is sent, and the implementation must record which version was accepted and when.
A loan between neighbors should need nothing more than the pledge: treat it with care, communicate, return on time, and make it right if it breaks.

### <span class="convention-id">NS-12</span> Deposits are optional, rare and plain
{: #ns-12 .convention}

A share is free and needs no deposit by default.
A lender or program may ask for a deposit on a thing that is costly to replace.
When they do, the amount, who holds it, when it is returned and how a claim against it works must be stated before the borrower agrees.
A deposit should be returned promptly after a clean return.
A deposit is not a fee: it is held against damage or loss and comes back in full when the thing does.
Thanks and contributions, which are always optional, are covered in [Gratitude and contributions](#gratitude-and-contributions).

## Share

<div id="hand-over"></div>

### <span class="convention-id">NS-13</span> Pickup details go only to the agreed borrower
{: #ns-13 .convention}

Where to pick a thing up, such as an address, a side gate or a lockbox code, is shared only once a lender agrees, and only with that borrower.

### <span class="convention-id">NS-14</span> Share somewhere that feels safe
{: #ns-14 .convention}

Lender and borrower agree on a place and time both are comfortable with: a doorstep, a porch, a public place, or daylight hours.
Either side may bring someone along.
Either side may call off a meeting that doesn't feel right, with no penalty and no explanation required.

### <span class="convention-id">NS-15</span> Note the condition when you share
{: #ns-15 .convention}

When the thing is shared, both sides confirm it matches its description, or note what differs.
A quick photo is enough.
The implementation should record when it was shared.

## Use

### <span class="convention-id">NS-16</span> Use it as agreed
{: #ns-16 .convention}

The borrower uses the thing for the stated purpose, follows the care and safety notes, and keeps it with their household.
A borrower must not lend a thing on to someone else without the lender's permission.

### <span class="convention-id">NS-17</span> Speak up early
{: #ns-17 .convention}

If a borrower will be late, needs it longer, or something breaks, they tell the lender as soon as they know, and before the return date.
A borrower may ask to extend a share, and the lender may say no.

## Return

### <span class="convention-id">NS-18</span> Return it on time and as you found it
{: #ns-18 .convention}

Bring it back by the agreed date, clean, charged or fueled as it was, with all its parts.
Normal wear from careful use is expected and is not damage.
Say thanks: that is how the next yes gets easy.

### <span class="convention-id">NS-19</span> Both sides confirm the return
{: #ns-19 .convention}

Either side may mark a thing returned, and the other side must be able to see that and say if something is wrong.
An implementation should remind the borrower before the return date, and may send gentle reminders after it.
Reminders go only to the two sides of the share, never to the circle.

## When something goes wrong

### <span class="convention-id">NS-20</span> Make it right together
{: #ns-20 .convention}

If a thing is damaged or lost, the borrower tells the lender promptly.
The two agree on a fair remedy: repair, a replacement of similar age and condition, or its fair value.
The baseline is the condition noted at the offer and when it was shared (NS-2, NS-15), not the price of a new one.

### <span class="convention-id">NS-21</span> Ask for help, don't punish
{: #ns-21 .convention}

If the two sides can't agree, either may ask the circle's steward, or a neutral neighbor both trust, to help them reach an answer.
A program should publish how it handles damage claims before anyone borrows.
An implementation must not publish complaints, ratings or scores about a person as a way to settle a dispute.

### <span class="convention-id">NS-22</span> Safety concerns come first
{: #ns-22 .convention}

Anyone may report a safety concern or harassment privately to the steward.
An implementation should let a person block another, so that neither sees the other's shed or requests.
A report and a block must stay private: the person blocked is not told who blocked them or why.

## Privacy and trust

### <span class="convention-id">NS-23</span> Show nearness, never location
{: #ns-23 .convention}

An implementation must not show a lender's exact location to anyone before a share is agreed.
Nearness should be shown coarsely, such as "same block", "in your neighborhood" or "about a mile".
An implementation should store only a coarse area when that is all it needs, and never an exact point it doesn't use.

### <span class="convention-id">NS-24</span> Who borrowed what stays private
{: #ns-24 .convention}

The history of a share is known to its two sides and, for an organization's things, to the people the organization authorizes.
An implementation must not show it to the circle or the public, and must not sell it or use it for advertising.
A person should be able to see their own history and remove it once their shares are closed.
A program may keep records its own published rules require.

### <span class="convention-id">NS-25</span> Trust is personal and named
{: #ns-25 .convention}

Trust comes from people who know each other.
When an implementation uses vouching, a vouch must be a deliberate statement by one person about another, and inviting someone must never count as vouching for them.
A person should be able to see who vouched for them, and their vouchers' names are shown to others only with consent.
An implementation must not rank people by a reputation score.

### <span class="convention-id">NS-26</span> Your shed is yours to take
{: #ns-26 .convention}

A lender should be able to export their shed, with its descriptions, notes and photos, and their share history, in an open format.
That lets a neighbor move between implementations without starting over.

## Fairness and access

### <span class="convention-id">NS-27</span> Anyone can take part
{: #ns-27 .convention}

Every circle should make it possible to offer, ask, agree and confirm a return in plain language, and should offer a way to take part without a smartphone, such as a printed sign-up sheet or a phone call to the steward.
An app or website offered to the public must let people do all of these with assistive technology, on an ordinary web browser, without installing an app.
A small informal group, such as a group chat, may not be able to promise every path, and that is fine: it should still welcome people who need another way in.

### <span class="convention-id">NS-28</span> Same terms for everyone a program serves
{: #ns-28 .convention}

A neighbor may lend to whomever they choose.
A program that lends to the public must offer the same published terms to everyone it serves.
An implementation must not filter or rank borrowers by race, religion, disability, or any other protected characteristic.

## Gratitude and contributions
{: #gratitude-and-contributions}

NeighborShed is lending, not renting.
Thanks is welcome, and some people like to give back.
There are three optional ways to do it:

- **A tip** from a borrower to a lender, one to one.
- **A contribution to a community pool**: a circle's shared fund for repairs, replacements or new things to lend.
- **A contribution to the service**: the app, program or organization that runs the implementation.

### <span class="convention-id">NS-29</span> Giving is always optional
{: #ns-29 .convention}

A tip or contribution must never be a condition of borrowing, and must never be asked for before a loan is agreed.
A loan is never priced.
A lender must not set a fee for use: that is renting, which is outside this protocol.

### <span class="convention-id">NS-30</span> No pressure, no effect on access
{: #ns-30 .convention}

Whether or how much someone gave must never be shown to others, and must never change who may borrow, who is answered first, or how much they are trusted.
An implementation must not prompt for a tip in a way that makes saying no awkward.

### <span class="convention-id">NS-31</span> Giving is private by default
{: #ns-31 .convention}

The amount of a tip and who gave it stay between the giver and the receiver.
A community pool publishes its totals and what the money was spent on, not who gave.

### <span class="convention-id">NS-32</span> A community pool is open about its money
{: #ns-32 .convention}

A community pool must say who holds it, what it is for, and how to ask a question about it.
It should report how its money was used at regular intervals, in plain language, to the circle it serves.

### <span class="convention-id">NS-33</span> Contributions to the service are labeled as such
{: #ns-33 .convention}

An implementation that accepts contributions for itself must present them separately from tips to a lender, so nobody mistakes one for the other.
Any processing fee must be stated before the person pays, along with how much reaches the recipient.

## Changes to this document

Version 0.1 is a first draft for discussion.
Each convention may still change before version 1.0.
Proposals are welcome: see [Implement it](/implement/#propose-a-change).
