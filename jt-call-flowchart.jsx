import { useState } from "react";

const NODES = {
  start: {
    phase: "OPENING",
    title: "Open the call",
    script: "Thanks for taking the time, James. Before we get into anything — from your side, what worked and what didn't from the last event? Anything you'd want done differently?",
    why: "BEN FRANKLIN EFFECT: asking his opinion makes him psychologically invested in you. Surfaces pain points you can solve. Puts him in evaluator mode, not price-negotiator mode.",
    options: [
      { label: "He's positive — it went well", next: "anchor_value" },
      { label: "He raises issues or complaints", next: "address_concerns" },
      { label: "He skips straight to price", next: "deflect_to_scope" },
      { label: "He asks about content performance", next: "data_deep_dive" },
    ],
  },
  address_concerns: {
    phase: "LISTEN",
    title: "He raised concerns",
    script: "That's fair, and I appreciate you being upfront. That's exactly the kind of thing I want to get right for HPC. Now that we've done one together, I know the operation — the turnarounds, fighter schedules, venue logistics. Second time round is always tighter.",
    why: "Acknowledge without defending. Frame yourself as MORE valuable now because of the first event. You're not a first-timer anymore. This justifies paying you.",
    options: [
      { label: "He seems satisfied — move on", next: "anchor_value" },
      { label: "He's still dwelling on issues", next: "reframe_forward" },
    ],
  },
  reframe_forward: {
    phase: "LISTEN",
    title: "Reframe to the future",
    script: "I hear you. HPC is a bigger stage — capacity for 2,500 people. That's a chance to level everything up. Let me walk you through what I've put together.",
    why: "Redirect forward. Mentioning 2,500 capacity plants a seed: larger event = more value from content = more justified spend.",
    options: [
      { label: "He's ready to hear the plan", next: "anchor_value" },
    ],
  },
  deflect_to_scope: {
    phase: "DEFLECT",
    title: "He asked about price first",
    script: "Yeah, I've got numbers ready. But before I give you a figure — do you know how the content actually performed from last event? Because the numbers might change how you think about the investment.",
    why: "REFRAME: don't let him set the frame as 'cost.' Redirect to 'performance' first. This sets up the data drop, which makes every number you quote afterwards feel like a bargain.",
    options: [
      { label: "\"No, what were the numbers?\"", next: "data_deep_dive" },
      { label: "\"Just give me the price\"", next: "forced_number" },
      { label: "He agrees to hear scope first", next: "anchor_value" },
    ],
  },
  data_deep_dive: {
    phase: "PRESENT",
    title: "Drop the viewership data",
    script: "So I pulled the analytics from Pathway's Instagram across the campaign window — from when we started posting pre-fight content through to fight night. Total views on the page during that period: 583,000. The content I produced accounted for 386,000 of those views. That's 66% of every eyeball on Pathway's page during the entire event campaign. Two thirds of your reach came from my work.",
    why: "DATA ANCHOR: this is your single most powerful negotiation tool. State it factually, not boastfully. Let the number do the work. 66% reframes you from 'videographer' to 'primary marketing engine.' Every price you quote after this sounds cheap.",
    options: [
      { label: "He's impressed — good reaction", next: "data_to_scope" },
      { label: "He downplays it", next: "data_defend" },
      { label: "He didn't know those numbers", next: "data_to_scope" },
    ],
  },
  data_defend: {
    phase: "PRESENT",
    title: "He downplayed the data",
    script: "I get that views aren't everything. But those views are what sell tickets and keep sponsors happy. Everlast, Jerky Co, LMG Motors, Real Estate 88, Sierra Mining — every sponsor video I made for them is part of why they come back. Without that content, you're asking sponsors to pay for a logo on a poster. With it, you're offering them a video asset they can run on their own channels.",
    why: "LOSS AVERSION: frame what he LOSES without you, not what he gains with you. 'Without that content, sponsors get a logo on paper.' People feel losses 2x stronger than gains.",
    options: [
      { label: "He takes the point", next: "data_to_scope" },
      { label: "He's still resistant", next: "anchor_value" },
    ],
  },
  data_to_scope: {
    phase: "PRESENT",
    title: "Bridge data to packages",
    script: "So with that context — here's what I've put together for HPC. I've got two options. The first matches last event's full scope. The second is a reduced version that keeps the highest-performing content but brings the cost down significantly.",
    why: "CONTRAST PRINCIPLE: mention 'two options' and 'reduced version' before showing numbers. This primes him to expect a cheaper option exists, which makes him receptive rather than defensive when you present Package A's price.",
    options: [
      { label: "He's listening — present Package A", next: "present_a" },
      { label: "\"Just tell me the cheaper one\"", next: "present_b" },
    ],
  },
  anchor_value: {
    phase: "PRESENT",
    title: "Anchor the value of last event",
    script: "Just so we're on the same page — last event I produced around 47 pieces of content. That content drove 386,000 views during the campaign window, which was 66% of all views on Pathway's page. The production value of that work was ten seven twenty-five.",
    why: "ANCHORING: state the dollar value paired with the viewership data. He can't argue with 66%. This is the psychological foundation — every number after this is compared to $10,725.",
    options: [
      { label: "He's listening — present packages", next: "present_a" },
      { label: "He reacts to the price", next: "price_resistance" },
      { label: "He asks more about the data", next: "data_deep_dive" },
    ],
  },
  present_a: {
    phase: "PRESENT",
    title: "Present Package A (the anchor)",
    script: "Option A is the full scope — same volume as last event. Nine fighter promos, six sponsor videos, weigh-ins, open workouts, event promos, and fight night cageside. All-in at ten seven twenty-five. That's a straight cash engagement, all expenses included.",
    why: "DECOY EFFECT: Package A exists to make Package B look like a deal. You're not expecting him to pick A. Present it first, let the sticker shock land, then rescue him with B.",
    options: [
      { label: "He's listening — present Package B", next: "present_b" },
      { label: "He reacts negatively to price", next: "present_b_rescue" },
      { label: "\"We can't do that much\"", next: "present_b_rescue" },
    ],
  },
  present_b_rescue: {
    phase: "PRESENT",
    title: "Rescue with Package B",
    script: "Yeah, I figured that might be a stretch. That's exactly why I put together Option B — it's built for this situation.",
    why: "DOOR-IN-THE-FACE: you asked for the big number first (and expected a no), so now the smaller ask feels like a concession. He feels like he's winning by getting the 'deal.'",
    options: [
      { label: "Continue to present B", next: "present_b" },
    ],
  },
  present_b: {
    phase: "PRESENT",
    title: "Present Package B (your target)",
    script: "Option B brings the cash down to seventy-five hundred. Same deliverables as Option A — all nine fighter promos, all the weigh-ins, open workouts, event promos, fight night. Full scope — that's your highest-value content, it's what drove those 386,000 views. In return, I keep poster placement, you collab-tag @jt.media on all social posts, and I get a thirty-second ad spot on screen between prelims and main card. Those three things cost you nothing to give me.",
    why: "FRAMING: 'costs you nothing' is the key phrase — repeat it. Also tie the retained content directly to the 386k number. He's not buying videos, he's buying the thing that drove 66% of his reach. SCARCITY: mention your schedule is filling with UFC fight week work (use this if needed).",
    options: [
      { label: "He's interested — leaning yes", next: "ufc_credibility" },
      { label: "\"Still too much\"", next: "price_resistance" },
      { label: "\"Can we do sponsorship only?\"", next: "sponsorship_pushback" },
      { label: "\"I need to think about it\"", next: "think_about_it" },
    ],
  },
  ufc_credibility: {
    phase: "CLOSE",
    title: "Drop UFC credibility (if moment is right)",
    script: "And just so you know where things are at with JT Media — I'm filming Craig Jones and Kobe Thicknesse for UFC Perth fight week starting next week. That's the level the work is at now. I want to keep Pathway as a long-term relationship, which is why Package B is priced the way it is.",
    why: "SOCIAL PROOF + SCARCITY: Craig Jones and UFC fight week signals you're in demand at a higher tier. 'Keep Pathway as a long-term relationship' implies he's lucky to have you at this price. Don't say this arrogantly — say it as context.",
    options: [
      { label: "He's ready to commit", next: "close_b" },
      { label: "He needs more convincing", next: "loss_frame" },
      { label: "\"I need to think about it\"", next: "think_about_it" },
    ],
  },
  loss_frame: {
    phase: "NEGOTIATE",
    title: "Frame what he loses without you",
    script: "Look, I'll be honest — without professional content, Pathway's event page becomes a poster and a few iPhone clips. Last time, your content drove 583,000 views in the campaign window. That's what sells tickets and keeps sponsors writing cheques. The question isn't what the content costs — it's what happens to ticket sales and sponsor confidence without it.",
    why: "LOSS AVERSION: people feel losses 2x stronger than equivalent gains. Don't sell what he gets — sell what he loses. 'What happens to ticket sales without it' is the sentence that does the work.",
    options: [
      { label: "He takes the point", next: "close_b" },
      { label: "He's still hesitant on price", next: "price_resistance" },
    ],
  },
  price_resistance: {
    phase: "NEGOTIATE",
    title: "He says it's too expensive",
    script: "I understand. But consider this — last event, my content generated 386,000 views for Pathway. At seventy-five hundred, that's about two cents per view. Meta ads for combat sports content in Perth run 5 to 15 cents per view. You'd spend fifteen to fifty thousand to buy those views through ads. I'm offering them organically for seventy-five hundred.",
    why: "REFRAME AS INVESTMENT: compare to paid media costs. James may not understand social media, but he understands that $7,500 is cheaper than $15,000-$50,000. This is the single best argument for an old-school decision maker.",
    options: [
      { label: "That landed — he's reconsidering", next: "close_b" },
      { label: "\"What number were you thinking?\"", next: "ask_his_number" },
      { label: "He's still pushing back", next: "ask_his_number" },
      { label: "\"Can we do sponsorship again?\"", next: "sponsorship_pushback" },
    ],
  },
  ask_his_number: {
    phase: "NEGOTIATE",
    title: "Ask for HIS number",
    script: "What number were you thinking? I want to find something that works.",
    why: "NEVER negotiate against yourself. Force him to anchor. If his number is above $6,000, you have room. If below, reduce scope — never drop the rate.",
    options: [
      { label: "His number is $6,000+", next: "counter_above_floor" },
      { label: "His number is under $6,000", next: "scope_reduction" },
      { label: "He won't give a number", next: "flush_budget" },
    ],
  },
  flush_budget: {
    phase: "NEGOTIATE",
    title: "He won't name a number",
    script: "I'm not trying to catch you out — I just want to find something that works for both of us. Even a rough range helps me figure out what I can deliver within it.",
    why: "Disarm his budget-hiding instinct. If he still won't say, name your floor.",
    options: [
      { label: "He gives a number above $6,000", next: "counter_above_floor" },
      { label: "He gives a number below $6,000", next: "scope_reduction" },
      { label: "He still won't say", next: "name_floor" },
    ],
  },
  name_floor: {
    phase: "NEGOTIATE",
    title: "Name your floor",
    script: "Alright, I'll be straight. The minimum I can do the core scope for — fighter promos, fight night, key event content — is six thousand plus fuel covered. Below that I'm losing money on fourteen trips to Perth and a month of production. Sponsorship elements stay in at that level.",
    why: "Fuel and trips are tangible costs an old-school operator respects. These aren't abstract 'creative fees' — they're kilometres and petrol. James will nod at this.",
    options: [
      { label: "He accepts or comes close", next: "close_b" },
      { label: "He pushes below $6,000", next: "walk_away" },
      { label: "\"Let me think about it\"", next: "think_about_it" },
    ],
  },
  counter_above_floor: {
    phase: "NEGOTIATE",
    title: "His number is above your floor",
    script: "I can work with that — but I need the sponsorship elements to stay in. Social collab, poster placement, and the ad spot between prelims and main card. Those cost you nothing and they're what make the lower number work for me.",
    why: "Lock it in fast. Don't push for more — any number above $6k with sponsorship elements is a win. The sponsorship elements are your real ROI from this deal.",
    options: [
      { label: "He agrees", next: "close_deal" },
      { label: "He resists sponsorship elements", next: "defend_sponsorship" },
    ],
  },
  defend_sponsorship: {
    phase: "NEGOTIATE",
    title: "He resists the sponsorship elements",
    script: "Think about it — tagging me on posts you're already making costs you zero. The ad spot is thirty seconds between fights that's currently dead air. The poster is a small logo. None of it takes anything from Pathway. It's what lets me charge you less in cash.",
    why: "Frame each element as literally zero cost. If he won't give you even these free-to-him items, the relationship isn't viable — he wants free labour with no upside for you.",
    options: [
      { label: "He agrees", next: "close_deal" },
      { label: "He still won't budge", next: "walk_away" },
    ],
  },
  scope_reduction: {
    phase: "NEGOTIATE",
    title: "Budget is below your floor",
    script: "At that level I can't do the full scope — I'd be losing money. But here's what I can do: cut some of the lower-tier content — the speed edits, some event promos. Keep fighter promos and fight night — that's what drove the 386,000 views. Sponsorship elements stay.",
    why: "NEVER drop the rate. Drop the scope. Tie the retained content to the data again. He keeps the thing that actually works.",
    options: [
      { label: "He accepts reduced scope", next: "close_deal" },
      { label: "He wants full scope at low price", next: "walk_away" },
      { label: "\"What about sponsorship only?\"", next: "sponsorship_pushback" },
    ],
  },
  sponsorship_pushback: {
    phase: "CRITICAL",
    title: "He wants sponsorship only — no cash",
    script: "I appreciate that, James. The first sponsorship was valuable for getting JT Media established with Pathway, and I'm glad we did it. But to keep this going long-term, I need cash in the mix. Package B is built for exactly that — you're still getting sponsorship value, just with a cash base that makes it sustainable for me.",
    why: "RECIPROCITY: you did $10,725 of work last time for sponsorship value. You've already given. Now it's his turn to give back with cash. Don't say this explicitly — it's the subtext.",
    options: [
      { label: "He considers Package B", next: "close_b" },
      { label: "\"We really can't do any cash\"", next: "buy_time" },
    ],
  },
  buy_time: {
    phase: "CRITICAL",
    title: "Buy time — do NOT accept today",
    script: "Understood. I don't want to say no to Pathway — I want to be involved. Let me take a day to work out a sponsorship structure that actually moves the needle for both of us, and I'll come back tomorrow with something concrete.",
    why: "You are NOT accepting sponsorship-only on the spot. You're buying 24 hours to build a counter-offer with real conversion mechanics: ring announcer callouts, fighter-facing reel on screen, backstage access, promoter referral, database intro.",
    options: [
      { label: "He agrees to wait", next: "end_buy_time" },
      { label: "He pressures for answer now", next: "hold_firm_time" },
    ],
  },
  hold_firm_time: {
    phase: "CRITICAL",
    title: "He's pressuring for an answer now",
    script: "I hear you, and I respect that you need to move on this. But I'd rather give you a proper proposal tomorrow than say yes to something that doesn't work for either of us. One day — end of tomorrow.",
    why: "Pressure to decide now is a negotiation tactic. Never accept under pressure. One day is reasonable.",
    options: [
      { label: "He agrees", next: "end_buy_time" },
    ],
  },
  forced_number: {
    phase: "DEFLECT",
    title: "He insists on a number now",
    script: "Alright — two options. Full scope at ten seven twenty-five, or a reduced package at seventy-five hundred with some sponsorship elements. But the context matters — my content drove 66% of Pathway's total views during the last campaign. Let me walk you through what's in each.",
    why: "Even when forced, pair the number with the data. 66% reframes every dollar as an investment, not a cost.",
    options: [
      { label: "\"That's too much\"", next: "present_b_rescue" },
      { label: "\"Tell me about the $7,500 one\"", next: "present_b" },
      { label: "He's open — let you continue", next: "present_a" },
    ],
  },
  close_b: {
    phase: "CLOSE",
    title: "Close on Package B",
    script: "Great. I've got a proposal document ready with everything itemised — I'll send it through right now so you can see the full breakdown. Once you're happy, we lock in with a 50% deposit and I start pre-production.",
    why: "COMMITMENT & CONSISTENCY: get verbal agreement, then immediately send the PDF. The document makes it real. Don't give him time to second-guess. Ask about deposit timeline in the same breath.",
    options: [
      { label: "He agrees — send the PDF", next: "end_success" },
      { label: "\"I need to run it past the other owner\"", next: "think_about_it" },
    ],
  },
  close_deal: {
    phase: "CLOSE",
    title: "Close the deal",
    script: "Perfect. I'll send through the proposal now with the agreed scope and numbers. Once you've reviewed it, we lock in with a 50% deposit and I start pre-production.",
    why: "Lock it in. Send the PDF. Move to deposit immediately.",
    options: [
      { label: "Done — send the PDF", next: "end_success" },
      { label: "He wants to check with partner first", next: "think_about_it" },
    ],
  },
  think_about_it: {
    phase: "CLOSE",
    title: "He needs to think about it",
    script: "No worries at all. I'll send through the proposal now so you've got everything in front of you. Just a heads-up — my schedule fills up pretty quickly with UFC fight week coming, so if we can lock it in within the week that'd be ideal.",
    why: "SCARCITY: UFC fight week is real and creates genuine time pressure. Send the PDF anyway — it works for you while you're not in the room. Follow up in 3 days.",
    final: true,
    finalNote: "Send the PDF immediately. Set a reminder for 3 days to follow up. Do not chase sooner.",
  },
  walk_away: {
    phase: "EXIT",
    title: "Walk-away point",
    script: "James, I'll be straight — below that number I'd be losing money on the job. I'd rather pass on this one and keep the relationship open for future events than do the work at a loss. No hard feelings.",
    why: "This is not a bluff. Say it calmly. If he comes back later, you've established your floor forever. He may realise in a week when he can't find anyone to produce 47 pieces of content for less.",
    options: [
      { label: "He comes back with a better offer", next: "counter_above_floor" },
      { label: "He accepts the walk-away", next: "end_walk" },
    ],
  },
  end_walk: {
    phase: "EXIT",
    title: "Call ends — you walked away",
    script: "All good, James. I appreciate the conversation and hope the event goes well. If things change, you know where to find me.",
    why: "End warm. Burn no bridges. He'll remember you had a number and stuck to it. That's how you build a reputation.",
    final: true,
    finalNote: "You held your floor. The relationship isn't dead — he may come back when he realises how much work the content is without you.",
  },
  end_buy_time: {
    phase: "EXIT",
    title: "Call ends — you bought time",
    script: "Perfect. I'll send something through tomorrow. Thanks for the chat, James — keen to make this work.",
    why: "End warm. Come straight back to Claude and build the conversion-mechanic counter-offer.",
    final: true,
    finalNote: "DO NOT accept sponsorship-only. Build counter-offer with: ring announcer callouts, fighter-facing reel on screen, backstage access, promoter referral to fighter database.",
  },
  end_success: {
    phase: "EXIT",
    title: "Deal closed",
    script: "Legend. I'll send that through now. Looking forward to HPC — it's going to be a big one.",
    final: true,
    finalNote: "Send the PDF within 60 seconds of hanging up. Follow up in 24 hours to confirm receipt and ask about deposit timeline.",
  },
};

const PHASE_COLORS = {
  OPENING: { bg: "rgb(30,58,95)", border: "rgb(59,130,246)", text: "rgb(147,197,253)" },
  LISTEN: { bg: "rgb(30,70,50)", border: "rgb(34,197,94)", text: "rgb(134,239,172)" },
  DEFLECT: { bg: "rgb(69,50,20)", border: "rgb(234,179,8)", text: "rgb(253,224,71)" },
  PRESENT: { bg: "rgb(30,58,95)", border: "rgb(59,130,246)", text: "rgb(147,197,253)" },
  NEGOTIATE: { bg: "rgb(69,50,20)", border: "rgb(234,179,8)", text: "rgb(253,224,71)" },
  CRITICAL: { bg: "rgb(80,20,20)", border: "rgb(239,68,68)", text: "rgb(252,165,165)" },
  CLOSE: { bg: "rgb(30,70,50)", border: "rgb(34,197,94)", text: "rgb(134,239,172)" },
  EXIT: { bg: "rgb(40,40,40)", border: "rgb(120,120,120)", text: "rgb(180,180,180)" },
};

const DATA_CARD = {
  title: "Your data ammunition",
  stats: [
    { label: "Total views (campaign window)", value: "583,155" },
    { label: "Views from YOUR content", value: "386,088" },
    { label: "Your share of total reach", value: "66.21%" },
    { label: "Content pieces delivered", value: "~47" },
    { label: "Share of Pathway's post library", value: "~13%" },
    { label: "Pathway followers", value: "2,194" },
    { label: "Cost per view at $7,500", value: "$0.019" },
    { label: "Meta ads CPV (combat, Perth)", value: "$0.05-0.15" },
    { label: "Equivalent ad spend for same views", value: "$19k-$58k" },
  ],
};

export default function CallFlowchart() {
  const [currentNode, setCurrentNode] = useState("start");
  const [history, setHistory] = useState([]);
  const [showWhy, setShowWhy] = useState(false);
  const [showData, setShowData] = useState(false);

  const node = NODES[currentNode];
  const phase = PHASE_COLORS[node.phase] || PHASE_COLORS.EXIT;

  const goTo = (nextId) => {
    setHistory((h) => [...h, currentNode]);
    setCurrentNode(nextId);
    setShowWhy(false);
  };

  const goBack = () => {
    if (history.length > 0) {
      setCurrentNode(history[history.length - 1]);
      setHistory((h) => h.slice(0, -1));
      setShowWhy(false);
    }
  };

  const reset = () => {
    setHistory([]);
    setCurrentNode("start");
    setShowWhy(false);
    setShowData(false);
  };

  return (
    <div style={{
      minHeight: "100vh", backgroundColor: "#0a0a0a", color: "#e5e5e5",
      fontFamily: "'SF Pro Text', -apple-system, system-ui, sans-serif",
      display: "flex", flexDirection: "column",
    }}>
      {/* Header */}
      <div style={{
        padding: "14px 20px 10px", borderBottom: "1px solid #222",
        display: "flex", justifyContent: "space-between", alignItems: "center", flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {history.length > 0 && (
            <button onClick={goBack} style={{
              background: "none", border: "none", color: "#888", fontSize: 20, cursor: "pointer", padding: "0 4px",
            }}>←</button>
          )}
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: 2, color: phase.text, textTransform: "uppercase" }}>
              {node.phase}
            </div>
            <div style={{ fontSize: 10, color: "#555", letterSpacing: 1, textTransform: "uppercase", marginTop: 1 }}>
              Step {history.length + 1}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={() => { setShowData(!showData); }} style={{
            background: showData ? "rgb(30,58,95)" : "none",
            border: showData ? "1px solid rgb(59,130,246)" : "1px solid #333",
            color: showData ? "rgb(147,197,253)" : "#666", fontSize: 10, padding: "5px 10px",
            cursor: "pointer", letterSpacing: 1, textTransform: "uppercase", borderRadius: 2,
          }}>Data</button>
          <button onClick={reset} style={{
            background: "none", border: "1px solid #333", color: "#666", fontSize: 10, padding: "5px 10px",
            cursor: "pointer", letterSpacing: 1, textTransform: "uppercase", borderRadius: 2,
          }}>Reset</button>
        </div>
      </div>

      {/* Data panel */}
      {showData && (
        <div style={{
          padding: "14px 20px", backgroundColor: "#0f1a2e", borderBottom: "1px solid rgb(59,130,246)",
        }}>
          <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: 2, color: "rgb(147,197,253)", textTransform: "uppercase", marginBottom: 10 }}>
            {DATA_CARD.title}
          </div>
          {DATA_CARD.stats.map((s, i) => (
            <div key={i} style={{
              display: "flex", justifyContent: "space-between", padding: "4px 0",
              borderBottom: i < DATA_CARD.stats.length - 1 ? "1px solid rgba(59,130,246,0.15)" : "none",
            }}>
              <span style={{ fontSize: 12, color: "#999" }}>{s.label}</span>
              <span style={{ fontSize: 12, color: "#fff", fontWeight: 600, fontVariantNumeric: "tabular-nums" }}>{s.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div style={{ flex: 1, padding: "20px 20px 110px", overflowY: "auto" }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, margin: "0 0 16px", color: "#f5f5f5", lineHeight: 1.2 }}>
          {node.title}
        </h2>

        {/* Script card */}
        <div style={{
          backgroundColor: phase.bg, borderLeft: "3px solid " + phase.border,
          padding: "16px 18px", marginBottom: 16, borderRadius: "0 6px 6px 0",
        }}>
          <div style={{
            fontSize: 9, fontWeight: 700, letterSpacing: 2, color: phase.text,
            textTransform: "uppercase", marginBottom: 8, opacity: 0.8,
          }}>SAY THIS</div>
          <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0, color: "#f0f0f0", fontStyle: "italic" }}>
            "{node.script}"
          </p>
        </div>

        {/* Why toggle */}
        <button onClick={() => setShowWhy(!showWhy)} style={{
          background: "none", border: "1px solid #2a2a2a", color: "#666", fontSize: 11,
          padding: "8px 14px", cursor: "pointer", width: "100%", textAlign: "left",
          marginBottom: showWhy ? 0 : 20, borderRadius: 4,
          display: "flex", justifyContent: "space-between", alignItems: "center",
        }}>
          <span style={{ letterSpacing: 1, textTransform: "uppercase" }}>Psychology & strategy</span>
          <span style={{ fontSize: 14 }}>{showWhy ? "−" : "+"}</span>
        </button>

        {showWhy && (
          <div style={{
            backgroundColor: "#141414", border: "1px solid #2a2a2a", borderTop: "none",
            padding: "14px 16px", marginBottom: 20, borderRadius: "0 0 4px 4px",
          }}>
            <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "#999" }}>{node.why}</p>
          </div>
        )}

        {/* Final note */}
        {node.final && node.finalNote && (
          <div style={{
            backgroundColor: "#1a1a00", border: "1px solid #444400",
            padding: "14px 16px", marginBottom: 20, borderRadius: 4,
          }}>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#bba830",
              textTransform: "uppercase", marginBottom: 6,
            }}>AFTER THE CALL</div>
            <p style={{ fontSize: 13, lineHeight: 1.5, margin: 0, color: "#ccc" }}>{node.finalNote}</p>
          </div>
        )}

        {/* Options */}
        {node.options && (
          <div>
            <div style={{
              fontSize: 9, fontWeight: 700, letterSpacing: 2, color: "#555",
              textTransform: "uppercase", marginBottom: 10,
            }}>WHAT DID HE SAY?</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {node.options.map((opt, i) => (
                <button key={i} onClick={() => goTo(opt.next)} style={{
                  backgroundColor: "#161616", border: "1px solid #2a2a2a", color: "#ddd",
                  fontSize: 15, padding: "16px 18px", cursor: "pointer", textAlign: "left",
                  borderRadius: 6, lineHeight: 1.35, display: "flex", alignItems: "center", gap: 12,
                }}>
                  <span style={{
                    fontSize: 12, color: phase.text, fontWeight: 700, flexShrink: 0, width: 20, textAlign: "center",
                  }}>{i + 1}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {node.final && !node.options && (
          <button onClick={reset} style={{
            backgroundColor: phase.bg, border: "1px solid " + phase.border, color: phase.text,
            fontSize: 14, fontWeight: 700, padding: 16, cursor: "pointer", width: "100%",
            textAlign: "center", borderRadius: 6, letterSpacing: 1, textTransform: "uppercase",
          }}>Start over</button>
        )}
      </div>

      {/* Bottom bar */}
      <div style={{
        position: "fixed", bottom: 0, left: 0, right: 0, padding: "10px 20px",
        backgroundColor: "#0a0a0a", borderTop: "1px solid #1a1a1a",
        display: "flex", justifyContent: "space-between",
        fontSize: 10, color: "#444", letterSpacing: 1, textTransform: "uppercase",
      }}>
        <span>Ask: $10,725</span>
        <span style={{ color: "rgb(34,197,94)" }}>Target: $7,500</span>
        <span style={{ color: "#c8102e" }}>Floor: $6,000</span>
      </div>
    </div>
  );
}
