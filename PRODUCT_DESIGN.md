# PRODUCT_DESIGN.md

## Product
Personal Trip App

## Core Purpose
This is a **READ-ONLY travel itinerary viewer** designed for a travel partner on iPhone.

- Planner = me
- Reader = travel partner
- Goal = clarity, ease, and real-world usability during travel

This is NOT:
- a dashboard
- a booking platform
- a cinematic landing page
- a design experiment

---

## Primary Use Context
The reader will use this app:
- in a car
- while walking
- in airports
- in hotels
- in low attention / low light conditions

Therefore:
- fast scanning is critical
- clarity > aesthetics
- interaction must be simple and predictable

---

## Core UX Principles

### 1. Mobile-first
- designed for iPhone usage
- one-hand interaction
- large readable text
- comfortable touch targets

---

### 2. Itinerary-first (not time-first)
The reader scans:
1. what they are doing
2. where they are going
3. when it happens

NOT:
- time-first schedule tables

---

### 3. Calm and Practical
UI should feel:
- clean
- quiet
- structured
- easy to scan

Avoid:
- heavy gradients
- excessive decoration
- “concept UI”
- overly abstract visuals

---

### 4. Real-world usability
The app must work during actual travel.

Prioritize:
- readability
- quick access
- map links
- simple navigation

---

## Page Structure

### Trip Detail Page (Primary Screen)

#### Top Navigation
- back button (left)
- small title (center)
- language toggle (繁 / EN)
- theme toggle (light / dark)

---

#### Header
- lightweight trip title (not oversized)
- optional short summary
- no exact dates or years (privacy-safe)

---

#### Day Selector
- horizontal pills:
  Day 1 / Day 2 / Day 3 / ...
- only ONE day active at a time

---

#### Day Detail Content
The selected day shows:

# Horizontal Swipeable Activity Cards

---

## Activity Card Model

Each card = ONE real itinerary step

### Content hierarchy

1. Activity title (primary, bold)
2. Location / description (secondary)
3. Time (visible but not dominant)
4. Action (Open Maps)

---

### Example

Arrive at LAS  
Las Vegas Harry Reid International Airport  

7:48 PM    Open Maps

---

### Rules
- no table-style layout
- no left-aligned time column
- vertical stacking only
- easy to scan in motion

---

## Interaction Model

### Horizontal Carousel
- swipe left/right to browse activities
- snap behavior
- partial next card visible (optional)
- smooth and predictable

---

### Day Switching
- tap day pills
- update content immediately
- reset carousel to first activity

---

## Background Behavior

### Context-aware background
- background changes based on active activity card

Example:
- Arrive at LAS → airport background
- Zion hike → nature background

---

### Constraints
- background must remain subtle
- use overlay / gradient if needed
- content must always stay readable
- background is SUPPORTING, not primary

---

## Maps Interaction
- every relevant activity should have a map link
- use lightweight “Open Maps” action
- must be easy to tap

---

## Language System
- bilingual: Traditional Chinese / English
- controlled by toggle
- no auto-translation
- use predefined content

---

## Theme System
- light / dark mode
- toggle via icon (sun / moon)
- must maintain readability in both modes

---

## What This Product Should NOT Become

Do NOT turn this into:
- a cinematic travel experience app
- a booking / planning system
- a feature-heavy platform
- a dashboard UI
- a card-heavy marketing layout
- an abstract storytelling interface

---

## Design Direction Summary

This app should feel like:

- a **personal travel companion**
- a **clean itinerary card system**
- something usable during real trips

NOT:
- a landing page
- a concept showcase
- a design portfolio piece

---

## Implementation Guidance

When designing or modifying UI:

- improve existing structure, do not rebuild
- prioritize clarity over creativity
- reduce visual noise
- avoid introducing new interaction patterns unless necessary
- keep components reusable and simple