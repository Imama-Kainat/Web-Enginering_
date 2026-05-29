# Tailwind CSS — Complete One-Shot Guide
> For developers who already know CSS and want to master Tailwind from scratch.

---

## Table of Contents

1. [What is Tailwind CSS?](#1-what-is-tailwind-css)
2. [Tailwind vs Traditional CSS](#2-tailwind-vs-traditional-css)
3. [Installation & Setup](#3-installation--setup)
4. [Core Concept: Utility-First](#4-core-concept-utility-first)
5. [Layout — Display & Box Model](#5-layout--display--box-model)
6. [Flexbox](#6-flexbox)
7. [CSS Grid](#7-css-grid)
8. [Spacing — Margin & Padding](#8-spacing--margin--padding)
9. [Sizing — Width & Height](#9-sizing--width--height)
10. [Typography](#10-typography)
11. [Colors & Backgrounds](#11-colors--backgrounds)
12. [Borders & Rings](#12-borders--rings)
13. [Effects — Shadows, Opacity, Blur](#13-effects--shadows-opacity-blur)
14. [Transforms & Transitions & Animations](#14-transforms-transitions--animations)
15. [Responsive Design](#15-responsive-design)
16. [Pseudo-Classes — Hover, Focus, Active](#16-pseudo-classes--hover-focus-active)
17. [Dark Mode](#17-dark-mode)
18. [Customization with `tailwind.config.js`](#18-customization-with-tailwindconfigjs)
19. [Reusable Components with `@apply`](#19-reusable-components-with-apply)
20. [Important Utility Cheatsheet](#20-important-utility-cheatsheet)
21. [Real-World Component Examples](#21-real-world-component-examples)
22. [Common Mistakes & Best Practices](#22-common-mistakes--best-practices)

---

## 1. What is Tailwind CSS?

Tailwind CSS is a **utility-first CSS framework**. Instead of writing custom CSS classes like `.card` or `.navbar`, you compose designs by combining small, single-purpose utility classes directly in your HTML.

**Traditional CSS approach:**
```css
/* styles.css */
.card {
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
```
```html
<div class="card">Hello</div>
```

**Tailwind approach:**
```html
<div class="bg-white rounded-lg p-6 shadow-md">Hello</div>
```

Same result. Zero custom CSS written.

---

## 2. Tailwind vs Traditional CSS

| Feature | Traditional CSS | Tailwind CSS |
|---|---|---|
| Where styles live | Separate `.css` files | Directly in HTML classes |
| Naming things | You name classes manually | No naming needed |
| CSS file size | Grows over time | Only used utilities are included |
| Responsive design | Media queries in CSS | Prefix classes (`md:`, `lg:`) |
| Consistency | Relies on discipline | Design system built-in |
| Learning curve | Know CSS = you're done | Need to learn utility names |

**When should you use Tailwind?**
- Component-based frameworks (React, Vue, Angular)
- You want rapid prototyping
- You want to avoid naming fatigue
- You want consistent design tokens out of the box

---

## 3. Installation & Setup

### Option A — Via CDN (Quick test, no build step)
```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  <h1 class="text-3xl font-bold text-blue-600">Hello Tailwind!</h1>
</body>
</html>
```
> ⚠️ CDN is for prototyping only. Use the CLI for production.

---

### Option B — Tailwind CLI (Recommended)

```bash
# Step 1: Initialize a project
npm init -y

# Step 2: Install Tailwind
npm install -D tailwindcss

# Step 3: Create config file
npx tailwindcss init

# Step 4: Create your input CSS file (src/input.css)
# Add these 3 lines inside it:
@tailwind base;
@tailwind components;
@tailwind utilities;

# Step 5: Tell Tailwind where your HTML files are (tailwind.config.js)
# content: ["./src/**/*.{html,js}"]

# Step 6: Build your CSS
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Your `tailwind.config.js`:
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Link the output CSS in your HTML:
```html
<link href="/dist/output.css" rel="stylesheet">
```

---

## 4. Core Concept: Utility-First

Every Tailwind class maps to **one (or a few) CSS properties**. Think of them as CSS shortcuts.

| Tailwind Class | CSS Equivalent |
|---|---|
| `text-center` | `text-align: center` |
| `font-bold` | `font-weight: 700` |
| `p-4` | `padding: 1rem` |
| `mt-2` | `margin-top: 0.5rem` |
| `flex` | `display: flex` |
| `hidden` | `display: none` |
| `w-full` | `width: 100%` |

The naming pattern is intuitive once you see a few examples:
- `text-{size}` → font size
- `bg-{color}-{shade}` → background color
- `p-{n}` → padding on all sides
- `px-{n}` → padding on x-axis (left + right)
- `py-{n}` → padding on y-axis (top + bottom)
- `m-{n}` → margin on all sides

---

## 5. Layout — Display & Box Model

### Display
```html
<div class="block">Block element</div>
<div class="inline">Inline element</div>
<div class="inline-block">Inline-block element</div>
<div class="flex">Flexbox container</div>
<div class="grid">Grid container</div>
<div class="hidden">display: none</div>
```

### Position
```html
<div class="relative">position: relative</div>
<div class="absolute top-0 right-0">position: absolute; top:0; right:0</div>
<div class="fixed bottom-4 right-4">position: fixed</div>
<div class="sticky top-0">position: sticky</div>
```

### Z-Index
```html
<div class="z-10">z-index: 10</div>
<div class="z-50">z-index: 50</div>
<div class="z-auto">z-index: auto</div>
```

### Overflow
```html
<div class="overflow-hidden">overflow: hidden</div>
<div class="overflow-scroll">overflow: scroll</div>
<div class="overflow-auto">overflow: auto</div>
<div class="overflow-x-auto">overflow-x: auto</div>
```

---

## 6. Flexbox

Tailwind maps every flexbox property to utilities.

### Flex Container
```html
<div class="flex">           <!-- display: flex -->
<div class="flex flex-row">  <!-- flex-direction: row (default) -->
<div class="flex flex-col">  <!-- flex-direction: column -->
<div class="flex flex-wrap"> <!-- flex-wrap: wrap -->
```

### Justify Content (Main Axis)
```html
<div class="flex justify-start">    <!-- justify-content: flex-start -->
<div class="flex justify-center">   <!-- justify-content: center -->
<div class="flex justify-end">      <!-- justify-content: flex-end -->
<div class="flex justify-between">  <!-- justify-content: space-between -->
<div class="flex justify-around">   <!-- justify-content: space-around -->
<div class="flex justify-evenly">   <!-- justify-content: space-evenly -->
```

### Align Items (Cross Axis)
```html
<div class="flex items-start">    <!-- align-items: flex-start -->
<div class="flex items-center">   <!-- align-items: center -->
<div class="flex items-end">      <!-- align-items: flex-end -->
<div class="flex items-stretch">  <!-- align-items: stretch -->
<div class="flex items-baseline"> <!-- align-items: baseline -->
```

### Flex Children
```html
<div class="flex-1">    <!-- flex: 1 1 0% — grows and shrinks equally -->
<div class="flex-auto"> <!-- flex: 1 1 auto -->
<div class="flex-none"> <!-- flex: none — won't grow or shrink -->
<div class="grow">      <!-- flex-grow: 1 -->
<div class="shrink-0">  <!-- flex-shrink: 0 -->
```

### Gap (between flex items)
```html
<div class="flex gap-4">    <!-- gap: 1rem -->
<div class="flex gap-x-4"> <!-- column-gap: 1rem -->
<div class="flex gap-y-2"> <!-- row-gap: 0.5rem -->
```

### Real Example — Navbar
```html
<nav class="flex items-center justify-between px-6 py-4 bg-white shadow">
  <span class="text-xl font-bold text-blue-600">Logo</span>
  <div class="flex gap-6">
    <a href="#" class="text-gray-600 hover:text-blue-600">Home</a>
    <a href="#" class="text-gray-600 hover:text-blue-600">About</a>
    <a href="#" class="text-gray-600 hover:text-blue-600">Contact</a>
  </div>
</nav>
```

---

## 7. CSS Grid

### Grid Container
```html
<div class="grid grid-cols-3">        <!-- 3 equal columns -->
<div class="grid grid-cols-4 gap-4">  <!-- 4 columns with gap -->
<div class="grid grid-cols-12">       <!-- 12-column layout -->
```

### Grid Template Columns
```html
<div class="grid grid-cols-1">   <!-- 1 column -->
<div class="grid grid-cols-2">   <!-- 2 columns -->
<div class="grid grid-cols-3">   <!-- 3 columns -->
<div class="grid grid-cols-4">   <!-- 4 columns -->
<div class="grid grid-cols-6">   <!-- 6 columns -->
<div class="grid grid-cols-12">  <!-- 12 columns -->
```

### Column Span
```html
<div class="col-span-1">   <!-- spans 1 column -->
<div class="col-span-2">   <!-- spans 2 columns -->
<div class="col-span-full"> <!-- spans all columns -->
```

### Row Span
```html
<div class="row-span-2">  <!-- spans 2 rows -->
```

### Real Example — Card Grid
```html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
  <div class="bg-white rounded-xl shadow p-4">Card 1</div>
  <div class="bg-white rounded-xl shadow p-4">Card 2</div>
  <div class="bg-white rounded-xl shadow p-4">Card 3</div>
</div>
```

---

## 8. Spacing — Margin & Padding

### The Spacing Scale

Tailwind uses a **spacing scale** where each unit = `0.25rem` (4px by default).

| Class suffix | Value |
|---|---|
| `0` | 0px |
| `1` | 4px (0.25rem) |
| `2` | 8px (0.5rem) |
| `3` | 12px (0.75rem) |
| `4` | 16px (1rem) |
| `5` | 20px (1.25rem) |
| `6` | 24px (1.5rem) |
| `8` | 32px (2rem) |
| `10` | 40px (2.5rem) |
| `12` | 48px (3rem) |
| `16` | 64px (4rem) |
| `20` | 80px (5rem) |
| `px` | 1px |

### Padding
```html
<div class="p-4">     padding: 1rem (all sides) </div>
<div class="px-4">    padding-left + padding-right: 1rem </div>
<div class="py-4">    padding-top + padding-bottom: 1rem </div>
<div class="pt-4">    padding-top: 1rem </div>
<div class="pr-4">    padding-right: 1rem </div>
<div class="pb-4">    padding-bottom: 1rem </div>
<div class="pl-4">    padding-left: 1rem </div>
```

### Margin
```html
<div class="m-4">    margin: 1rem (all sides) </div>
<div class="mx-4">   margin-left + margin-right: 1rem </div>
<div class="my-4">   margin-top + margin-bottom: 1rem </div>
<div class="mt-4">   margin-top: 1rem </div>
<div class="mr-4">   margin-right: 1rem </div>
<div class="mb-4">   margin-bottom: 1rem </div>
<div class="ml-4">   margin-left: 1rem </div>

<!-- Auto margin (for centering) -->
<div class="mx-auto">  margin-left: auto; margin-right: auto </div>

<!-- Negative margin -->
<div class="-mt-2">  margin-top: -0.5rem </div>
```

---

## 9. Sizing — Width & Height

### Width
```html
<div class="w-1/2">     width: 50% </div>
<div class="w-1/3">     width: 33.33% </div>
<div class="w-2/3">     width: 66.66% </div>
<div class="w-full">    width: 100% </div>
<div class="w-screen">  width: 100vw </div>
<div class="w-auto">    width: auto </div>
<div class="w-fit">     width: fit-content </div>
<div class="w-max">     width: max-content </div>
<div class="w-min">     width: min-content </div>

<!-- Fixed pixel-based widths (using spacing scale) -->
<div class="w-4">   width: 1rem (16px) </div>
<div class="w-8">   width: 2rem (32px) </div>
<div class="w-16">  width: 4rem (64px) </div>
<div class="w-32">  width: 8rem (128px) </div>
<div class="w-64">  width: 16rem (256px) </div>
```

### Height
```html
<div class="h-full">    height: 100% </div>
<div class="h-screen">  height: 100vh </div>
<div class="h-auto">    height: auto </div>
<div class="h-4">       height: 1rem </div>
<div class="h-16">      height: 4rem </div>
```

### Min/Max Sizing
```html
<div class="min-w-0">      min-width: 0 </div>
<div class="max-w-sm">     max-width: 24rem </div>
<div class="max-w-md">     max-width: 28rem </div>
<div class="max-w-lg">     max-width: 32rem </div>
<div class="max-w-xl">     max-width: 36rem </div>
<div class="max-w-2xl">    max-width: 42rem </div>
<div class="max-w-7xl">    max-width: 80rem </div>
<div class="max-w-full">   max-width: 100% </div>
<div class="max-w-prose">  max-width: 65ch </div>
```

---

## 10. Typography

### Font Size
```html
<p class="text-xs">    font-size: 0.75rem  (12px) </p>
<p class="text-sm">    font-size: 0.875rem (14px) </p>
<p class="text-base">  font-size: 1rem     (16px) — default </p>
<p class="text-lg">    font-size: 1.125rem (18px) </p>
<p class="text-xl">    font-size: 1.25rem  (20px) </p>
<p class="text-2xl">   font-size: 1.5rem   (24px) </p>
<p class="text-3xl">   font-size: 1.875rem (30px) </p>
<p class="text-4xl">   font-size: 2.25rem  (36px) </p>
<p class="text-5xl">   font-size: 3rem     (48px) </p>
<p class="text-6xl">   font-size: 3.75rem  (60px) </p>
<p class="text-9xl">   font-size: 8rem     (128px)</p>
```

### Font Weight
```html
<p class="font-thin">       font-weight: 100 </p>
<p class="font-extralight"> font-weight: 200 </p>
<p class="font-light">      font-weight: 300 </p>
<p class="font-normal">     font-weight: 400 </p>
<p class="font-medium">     font-weight: 500 </p>
<p class="font-semibold">   font-weight: 600 </p>
<p class="font-bold">       font-weight: 700 </p>
<p class="font-extrabold">  font-weight: 800 </p>
<p class="font-black">      font-weight: 900 </p>
```

### Text Alignment
```html
<p class="text-left">    text-align: left </p>
<p class="text-center">  text-align: center </p>
<p class="text-right">   text-align: right </p>
<p class="text-justify"> text-align: justify </p>
```

### Text Decoration & Transform
```html
<p class="underline">         text-decoration: underline </p>
<p class="line-through">      text-decoration: line-through </p>
<p class="no-underline">      text-decoration: none </p>
<p class="uppercase">         text-transform: uppercase </p>
<p class="lowercase">         text-transform: lowercase </p>
<p class="capitalize">        text-transform: capitalize </p>
<p class="italic">            font-style: italic </p>
<p class="not-italic">        font-style: normal </p>
```

### Line Height
```html
<p class="leading-none">     line-height: 1 </p>
<p class="leading-tight">    line-height: 1.25 </p>
<p class="leading-snug">     line-height: 1.375 </p>
<p class="leading-normal">   line-height: 1.5 </p>
<p class="leading-relaxed">  line-height: 1.625 </p>
<p class="leading-loose">    line-height: 2 </p>
```

### Letter Spacing (Tracking)
```html
<p class="tracking-tighter"> letter-spacing: -0.05em </p>
<p class="tracking-tight">   letter-spacing: -0.025em </p>
<p class="tracking-normal">  letter-spacing: 0 </p>
<p class="tracking-wide">    letter-spacing: 0.025em </p>
<p class="tracking-wider">   letter-spacing: 0.05em </p>
<p class="tracking-widest">  letter-spacing: 0.1em </p>
```

### Text Overflow
```html
<p class="truncate">         overflow: hidden; text-overflow: ellipsis; white-space: nowrap </p>
<p class="overflow-ellipsis"> text-overflow: ellipsis </p>
<p class="whitespace-nowrap"> white-space: nowrap </p>
<p class="break-words">       overflow-wrap: break-word </p>
```

---

## 11. Colors & Backgrounds

### Tailwind's Color Palette

Tailwind has a full built-in palette. Colors go from `50` (lightest) to `950` (darkest).

**Available colors:** `slate`, `gray`, `zinc`, `neutral`, `stone`, `red`, `orange`, `amber`, `yellow`, `lime`, `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`, `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`

```html
<!-- Text Colors -->
<p class="text-gray-900">   Very dark gray text </p>
<p class="text-gray-600">   Medium gray text </p>
<p class="text-blue-500">   Blue text </p>
<p class="text-red-600">    Red text </p>
<p class="text-green-500">  Green text </p>
<p class="text-white">      White text </p>
<p class="text-black">      Black text </p>
<p class="text-transparent"> Transparent text </p>

<!-- Background Colors -->
<div class="bg-white">       white background </div>
<div class="bg-gray-100">    light gray background </div>
<div class="bg-blue-600">    blue background </div>
<div class="bg-red-500">     red background </div>
<div class="bg-transparent"> transparent background </div>
```

### Background Gradient
```html
<div class="bg-gradient-to-r from-blue-500 to-purple-600">
  Left to right gradient
</div>

<div class="bg-gradient-to-br from-pink-500 via-red-500 to-yellow-400">
  Diagonal gradient with 3 stops
</div>
```

Gradient directions: `to-t`, `to-tr`, `to-r`, `to-br`, `to-b`, `to-bl`, `to-l`, `to-tl`

### Background Image & Size
```html
<div class="bg-cover">    background-size: cover </div>
<div class="bg-contain">  background-size: contain </div>
<div class="bg-center">   background-position: center </div>
<div class="bg-no-repeat"> background-repeat: no-repeat </div>
```

### Opacity
```html
<div class="opacity-0">    opacity: 0 </div>
<div class="opacity-25">   opacity: 0.25 </div>
<div class="opacity-50">   opacity: 0.5 </div>
<div class="opacity-75">   opacity: 0.75 </div>
<div class="opacity-100">  opacity: 1 </div>
```

---

## 12. Borders & Rings

### Border Width
```html
<div class="border">      border-width: 1px (all sides) </div>
<div class="border-2">    border-width: 2px </div>
<div class="border-4">    border-width: 4px </div>
<div class="border-8">    border-width: 8px </div>
<div class="border-0">    border-width: 0px (remove border) </div>
<div class="border-t-2">  border-top-width: 2px </div>
<div class="border-b-2">  border-bottom-width: 2px </div>
<div class="border-l-4">  border-left-width: 4px </div>
```

### Border Color
```html
<div class="border border-gray-300">   light gray border </div>
<div class="border-2 border-blue-500"> blue border </div>
<div class="border border-red-500">    red border </div>
```

### Border Style
```html
<div class="border border-solid">   border-style: solid (default) </div>
<div class="border border-dashed">  border-style: dashed </div>
<div class="border border-dotted">  border-style: dotted </div>
<div class="border-none">           border: none </div>
```

### Border Radius
```html
<div class="rounded-none">   border-radius: 0 </div>
<div class="rounded-sm">     border-radius: 2px </div>
<div class="rounded">        border-radius: 4px </div>
<div class="rounded-md">     border-radius: 6px </div>
<div class="rounded-lg">     border-radius: 8px </div>
<div class="rounded-xl">     border-radius: 12px </div>
<div class="rounded-2xl">    border-radius: 16px </div>
<div class="rounded-3xl">    border-radius: 24px </div>
<div class="rounded-full">   border-radius: 9999px (perfect circle) </div>

<!-- Specific corners -->
<div class="rounded-t-lg">   top corners only </div>
<div class="rounded-b-lg">   bottom corners only </div>
<div class="rounded-l-lg">   left corners only </div>
<div class="rounded-tl-xl">  top-left corner only </div>
```

### Ring (outline-like glow border)
Rings are used for focus states, glow effects etc.
```html
<div class="ring-2">                  ring with 2px width </div>
<div class="ring-4 ring-blue-500">    blue ring </div>
<div class="ring-2 ring-offset-2">    ring with offset </div>
```

---

## 13. Effects — Shadows, Opacity, Blur

### Box Shadow
```html
<div class="shadow-none">   no shadow </div>
<div class="shadow-sm">     small shadow </div>
<div class="shadow">        default shadow </div>
<div class="shadow-md">     medium shadow </div>
<div class="shadow-lg">     large shadow </div>
<div class="shadow-xl">     extra large shadow </div>
<div class="shadow-2xl">    2x extra large shadow </div>
<div class="shadow-inner">  inner shadow </div>

<!-- Colored shadow -->
<div class="shadow-lg shadow-blue-500/50"> blue tinted shadow </div>
```

### Backdrop Blur (Glassmorphism)
```html
<div class="backdrop-blur-sm">   backdrop-filter: blur(4px) </div>
<div class="backdrop-blur">      backdrop-filter: blur(8px) </div>
<div class="backdrop-blur-md">   backdrop-filter: blur(12px) </div>
<div class="backdrop-blur-lg">   backdrop-filter: blur(16px) </div>
<div class="backdrop-blur-xl">   backdrop-filter: blur(24px) </div>
<div class="backdrop-blur-2xl">  backdrop-filter: blur(40px) </div>
```

### Glassmorphism Example
```html
<div class="relative bg-gradient-to-br from-blue-600 to-purple-700 h-64 rounded-2xl p-8">
  <div class="absolute inset-4 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 p-4">
    <p class="text-white font-semibold">Glass Card</p>
  </div>
</div>
```

### Filter (blur, brightness, contrast)
```html
<img class="blur-sm">       filter: blur(4px) </img>
<img class="blur">          filter: blur(8px) </img>
<img class="blur-none">     filter: blur(0) </img>
<img class="brightness-50"> filter: brightness(.5) </img>
<img class="brightness-125">filter: brightness(1.25) </img>
<img class="grayscale">     filter: grayscale(100%) </img>
<img class="grayscale-0">   filter: grayscale(0) </img>
<img class="invert">        filter: invert(100%) </img>
<img class="sepia">         filter: sepia(100%) </img>
```

---

## 14. Transforms, Transitions & Animations

### Transform
```html
<div class="scale-50">      transform: scale(.5) </div>
<div class="scale-100">     transform: scale(1) </div>
<div class="scale-150">     transform: scale(1.5) </div>
<div class="scale-x-50">    transform: scaleX(.5) </div>

<div class="rotate-0">      transform: rotate(0deg) </div>
<div class="rotate-45">     transform: rotate(45deg) </div>
<div class="rotate-90">     transform: rotate(90deg) </div>
<div class="rotate-180">    transform: rotate(180deg) </div>
<div class="-rotate-45">    transform: rotate(-45deg) </div>

<div class="translate-x-4">  transform: translateX(1rem) </div>
<div class="translate-y-2">  transform: translateY(0.5rem) </div>
<div class="-translate-y-1"> transform: translateY(-0.25rem) </div>

<div class="skew-x-6">      transform: skewX(6deg) </div>
```

### Transition
```html
<!-- transition: all properties -->
<div class="transition">           transition-property: all </div>
<div class="transition-colors">    transition-property: color, background-color, ... </div>
<div class="transition-opacity">   transition-property: opacity </div>
<div class="transition-transform"> transition-property: transform </div>

<!-- Duration -->
<div class="duration-75">    transition-duration: 75ms </div>
<div class="duration-100">   transition-duration: 100ms </div>
<div class="duration-150">   transition-duration: 150ms </div>
<div class="duration-200">   transition-duration: 200ms </div>
<div class="duration-300">   transition-duration: 300ms </div>
<div class="duration-500">   transition-duration: 500ms </div>
<div class="duration-700">   transition-duration: 700ms </div>
<div class="duration-1000">  transition-duration: 1000ms </div>

<!-- Easing -->
<div class="ease-linear">   transition-timing-function: linear </div>
<div class="ease-in">       transition-timing-function: cubic-bezier(0.4, 0, 1, 1) </div>
<div class="ease-out">      transition-timing-function: cubic-bezier(0, 0, 0.2, 1) </div>
<div class="ease-in-out">   transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) </div>
```

### Button with hover transition — full example
```html
<button class="
  bg-blue-600 text-white font-semibold
  px-6 py-3 rounded-lg
  transition-all duration-200 ease-in-out
  hover:bg-blue-700
  hover:scale-105
  hover:shadow-lg
  active:scale-95
">
  Click Me
</button>
```

### Built-in Animations
```html
<div class="animate-spin">    animation: spin 1s linear infinite </div>
<div class="animate-ping">    animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite </div>
<div class="animate-pulse">   animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite </div>
<div class="animate-bounce">  animation: bounce 1s infinite </div>
<div class="animate-none">    animation: none </div>
```

---

## 15. Responsive Design

Tailwind uses a **mobile-first** approach. You write styles for mobile by default, then override for larger screens using breakpoint prefixes.

### Breakpoints

| Prefix | Min Width | Typical Device |
|---|---|---|
| (none) | 0px | Mobile (default) |
| `sm:` | 640px | Large phones / small tablets |
| `md:` | 768px | Tablets |
| `lg:` | 1024px | Laptops |
| `xl:` | 1280px | Desktops |
| `2xl:` | 1536px | Large desktops |

### How to Use Breakpoints

```html
<!-- text is small on mobile, larger on tablet, biggest on desktop -->
<h1 class="text-2xl md:text-4xl lg:text-6xl">
  Responsive Heading
</h1>

<!-- Stack on mobile, row on tablet+ -->
<div class="flex flex-col md:flex-row gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</div>

<!-- Hidden on mobile, visible on md+ -->
<div class="hidden md:block">
  Desktop only content
</div>

<!-- Visible on mobile, hidden on md+ -->
<div class="block md:hidden">
  Mobile only content
</div>

<!-- 1 column on mobile, 2 on tablet, 3 on desktop -->
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  ...
</div>
```

### Reading Order Rule
Always read Tailwind classes **left to right**, mobile first:
```
text-sm        → Mobile: small text
md:text-base   → Tablet+: base text
lg:text-lg     → Desktop+: large text
```

---

## 16. Pseudo-Classes — Hover, Focus, Active

Every Tailwind utility can be combined with pseudo-class prefixes.

### Hover
```html
<button class="bg-blue-500 hover:bg-blue-700">Hover me</button>
<p class="text-gray-600 hover:text-black">Hover text</p>
<div class="opacity-70 hover:opacity-100">Hover opacity</div>
<img class="grayscale hover:grayscale-0 transition">Hover image</img>
```

### Focus
```html
<input class="border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 rounded px-3 py-2">
```

### Active (click state)
```html
<button class="bg-blue-600 active:bg-blue-800 active:scale-95 transition">
  Click Me
</button>
```

### Group Hover
When you want to trigger a style on a **child** when the **parent** is hovered:
```html
<div class="group cursor-pointer">
  <h3 class="text-gray-800 group-hover:text-blue-600 transition">Card Title</h3>
  <p class="text-gray-500 group-hover:text-gray-700 transition">Card description text</p>
  <span class="opacity-0 group-hover:opacity-100 transition">→</span>
</div>
```

### Peer (sibling-based styling)
When you want to style a sibling based on another input's state:
```html
<input type="checkbox" class="peer hidden" id="toggle" />
<label for="toggle" class="cursor-pointer bg-gray-300 peer-checked:bg-blue-500 rounded-full px-4 py-2 transition">
  Toggle me
</label>
```

### Other Pseudo-Classes
```html
<li class="first:mt-0 mt-4">First item has no top margin</li>
<li class="last:mb-0 mb-4">Last item has no bottom margin</li>
<li class="odd:bg-gray-100 even:bg-white p-2">Zebra striping</li>
<button class="disabled:opacity-50 disabled:cursor-not-allowed" disabled>Disabled</button>
<a class="visited:text-purple-600">Visited link</a>
<input class="placeholder:text-gray-400" placeholder="Type here...">
```

---

## 17. Dark Mode

Tailwind supports dark mode with the `dark:` prefix.

### Setup in `tailwind.config.js`
```javascript
module.exports = {
  darkMode: 'class', // OR 'media'
  // ...
}
```

- **`'media'`** — respects the user's OS dark mode preference automatically
- **`'class'`** — you control it manually by adding `class="dark"` to the `<html>` tag

### Usage
```html
<div class="bg-white dark:bg-gray-900">
  <h1 class="text-gray-900 dark:text-white">Hello!</h1>
  <p class="text-gray-600 dark:text-gray-400">Subtext</p>
  <button class="bg-blue-600 dark:bg-blue-500 text-white">Action</button>
</div>
```

### Toggle Dark Mode with JS (class strategy)
```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Or based on preference
if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
```

---

## 18. Customization with `tailwind.config.js`

Tailwind is fully customizable. You can extend (add to) or override the default theme.

### Extending the Theme (recommended)
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // Add custom colors
      colors: {
        brand: {
          50:  '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        primary: '#6C63FF',
      },

      // Add custom font sizes
      fontSize: {
        'xxs': '0.625rem',  // 10px
        'huge': '5rem',      // 80px
      },

      // Add custom spacing
      spacing: {
        '18': '4.5rem',  // w-18, p-18, etc.
        '128': '32rem',
      },

      // Add custom border radius
      borderRadius: {
        '4xl': '2rem',
      },

      // Add custom fonts
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },

      // Add custom breakpoints
      screens: {
        'xs': '480px',
        '3xl': '1920px',
      },

      // Add custom box shadows
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.5)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
      },

      // Custom animation
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        fadeIn: 'fadeIn 0.3s ease-out',
      },
    },
  },
}
```

Using custom values in HTML:
```html
<div class="bg-brand-500 text-primary font-heading shadow-glow animate-wiggle">
  Custom Everything
</div>
```

### Overriding (NOT extending)
If you put values directly in `theme` instead of `theme.extend`, it **replaces** the defaults:
```javascript
theme: {
  colors: {
    // ⚠️ This REMOVES all built-in colors — only these exist now!
    primary: '#6C63FF',
    danger: '#ef4444',
  }
}
```

### Arbitrary Values (JIT)
You can use **any** value on the fly without config:
```html
<div class="w-[300px]">           width: 300px </div>
<div class="top-[117px]">         top: 117px </div>
<div class="bg-[#1da1f2]">        custom hex color </div>
<div class="text-[22px]">         font-size: 22px </div>
<div class="grid-cols-[1fr,2fr]"> custom grid </div>
<div class="before:content-['*']"> pseudo element content </div>
```

---

## 19. Reusable Components with `@apply`

When you have repetitive utility combinations, extract them into a CSS class using `@apply`:

```css
/* src/input.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .btn {
    @apply inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold
           transition-all duration-200 cursor-pointer;
  }

  .btn-primary {
    @apply bg-blue-600 text-white hover:bg-blue-700 active:scale-95;
  }

  .btn-outline {
    @apply border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white;
  }

  .card {
    @apply bg-white rounded-xl shadow-md p-6 border border-gray-100;
  }

  .input {
    @apply w-full border border-gray-300 rounded-lg px-4 py-2.5
           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
           transition duration-200;
  }

  .badge {
    @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium;
  }
}
```

Using them:
```html
<button class="btn btn-primary">Save Changes</button>
<button class="btn btn-outline">Cancel</button>
<div class="card">
  <input class="input" type="text" placeholder="Enter email...">
</div>
<span class="badge bg-green-100 text-green-800">Active</span>
```

> 💡 Use `@apply` sparingly. Tailwind's power is in utility classes. Overusing `@apply` defeats the purpose.

---

## 20. Important Utility Cheatsheet

### Cursor & Pointer
```html
<div class="cursor-pointer">   cursor: pointer </div>
<div class="cursor-not-allowed"> cursor: not-allowed </div>
<div class="cursor-wait">      cursor: wait </div>
<div class="cursor-text">      cursor: text </div>
<div class="cursor-grab">      cursor: grab </div>
<div class="pointer-events-none"> pointer-events: none </div>
```

### Select Text
```html
<div class="select-none">   user-select: none </div>
<div class="select-text">   user-select: text </div>
<div class="select-all">    user-select: all </div>
```

### Object Fit (for images/video)
```html
<img class="object-cover">    object-fit: cover </img>
<img class="object-contain">  object-fit: contain </img>
<img class="object-fill">     object-fit: fill </img>
<img class="object-center">   object-position: center </img>
<img class="object-top">      object-position: top </img>
```

### Aspect Ratio
```html
<div class="aspect-square">    aspect-ratio: 1 / 1 </div>
<div class="aspect-video">     aspect-ratio: 16 / 9 </div>
<div class="aspect-[4/3]">     aspect-ratio: 4 / 3 </div>
```

### List Styles
```html
<ul class="list-disc pl-5">      unordered list with bullets </ul>
<ol class="list-decimal pl-5">   ordered list with numbers </ol>
<ul class="list-none">           no list styling </ul>
<ul class="list-inside">         list-style-position: inside </ul>
```

### Visibility
```html
<div class="visible">    visibility: visible </div>
<div class="invisible">  visibility: hidden (still takes space!) </div>
<div class="hidden">     display: none (does NOT take space) </div>
```

### Divide (borders between children)
```html
<div class="divide-y divide-gray-200">
  <div class="py-3">Item 1</div>
  <div class="py-3">Item 2</div>
  <div class="py-3">Item 3</div>
</div>
```

### Space Between (margin between children)
```html
<div class="flex space-x-4">    <!-- margin-left on all children except first -->
  <div>1</div><div>2</div><div>3</div>
</div>

<div class="flex flex-col space-y-4">
  <div>1</div><div>2</div><div>3</div>
</div>
```

---

## 21. Real-World Component Examples

### Hero Section
```html
<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-blue-900 px-4">
  <div class="text-center max-w-3xl mx-auto">
    <span class="inline-block bg-blue-500/20 text-blue-300 text-sm font-medium px-3 py-1 rounded-full mb-6 border border-blue-500/30">
      🚀 New Version Available
    </span>
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
      Build Faster with
      <span class="text-blue-400">Tailwind CSS</span>
    </h1>
    <p class="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
      A utility-first CSS framework that lets you build modern designs without leaving your HTML.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <button class="bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
        Get Started →
      </button>
      <button class="border border-slate-500 text-slate-300 font-semibold px-8 py-4 rounded-xl hover:border-slate-300 hover:text-white transition-all duration-200">
        View Docs
      </button>
    </div>
  </div>
</section>
```

---

### Pricing Card
```html
<div class="max-w-sm mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
  <!-- Header -->
  <div class="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
    <span class="text-sm font-medium uppercase tracking-wider opacity-80">Pro Plan</span>
    <div class="flex items-end gap-1 mt-2">
      <span class="text-5xl font-bold">$29</span>
      <span class="text-lg opacity-70 mb-1">/month</span>
    </div>
  </div>

  <!-- Features -->
  <div class="p-6 space-y-3">
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="text-gray-700">Unlimited projects</span>
    </div>
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="text-gray-700">Priority support</span>
    </div>
    <div class="flex items-center gap-3">
      <svg class="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="text-gray-700">Analytics dashboard</span>
    </div>
  </div>

  <!-- CTA -->
  <div class="px-6 pb-6">
    <button class="w-full bg-blue-600 text-white font-semibold py-3 rounded-xl hover:bg-blue-700 transition-colors duration-200">
      Get Started
    </button>
    <p class="text-center text-sm text-gray-500 mt-3">No credit card required</p>
  </div>
</div>
```

---

### Input Form Field
```html
<div class="max-w-md mx-auto p-6 space-y-4">
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1" for="email">
      Email Address
    </label>
    <input
      id="email"
      type="email"
      placeholder="you@example.com"
      class="w-full border border-gray-300 rounded-lg px-4 py-2.5
             text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition duration-200"
    />
  </div>

  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1" for="password">
      Password
    </label>
    <input
      id="password"
      type="password"
      placeholder="••••••••"
      class="w-full border border-gray-300 rounded-lg px-4 py-2.5
             text-gray-900 placeholder-gray-400
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
             transition duration-200"
    />
  </div>

  <button class="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg
                 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200">
    Sign In
  </button>
</div>
```

---

### Toast Notification
```html
<div class="fixed bottom-4 right-4 flex items-center gap-3
            bg-gray-900 text-white px-5 py-4 rounded-xl shadow-2xl
            animate-bounce max-w-xs">
  <div class="w-2 h-2 bg-green-400 rounded-full flex-shrink-0"></div>
  <p class="text-sm font-medium">Changes saved successfully!</p>
  <button class="ml-auto text-gray-400 hover:text-white transition-colors">✕</button>
</div>
```

---

## 22. Common Mistakes & Best Practices

### ❌ Mistakes to Avoid

**1. Using Tailwind without purging in production**
Always run a production build — Tailwind removes unused classes automatically with the `content` config.

**2. Forgetting mobile-first**
```html
<!-- ❌ Wrong thinking: "desktop first" -->
<div class="text-4xl sm:text-xl">  <!-- Makes text small on mobile, big on desktop? No, this does the opposite -->

<!-- ✅ Correct: mobile first -->
<div class="text-xl lg:text-4xl">  <!-- Small on mobile, large on desktop -->
```

**3. Mixing `space-x` and `gap` on the same container**
Use `gap-*` for flex/grid containers. Use `space-x-*` only for simple flex rows.

**4. Using `@apply` for everything**
```css
/* ❌ Defeats the purpose */
.text-primary { @apply text-blue-600 }

/* ✅ Only extract repeated multi-class combinations */
.btn-primary { @apply bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 }
```

**5. Forgetting `transition` when animating**
```html
<!-- ❌ No transition — snappy, not smooth -->
<div class="bg-blue-500 hover:bg-blue-700">

<!-- ✅ With transition — smooth animation -->
<div class="bg-blue-500 hover:bg-blue-700 transition-colors duration-200">
```

---

### ✅ Best Practices

1. **Organize classes by category** — layout → sizing → spacing → typography → colors → effects:
   ```html
   <div class="flex items-center  w-full max-w-md  px-4 py-3  text-sm font-medium  bg-blue-600 text-white  rounded-lg shadow-md  hover:bg-blue-700 transition">
   ```

2. **Use Prettier plugin for Tailwind** — auto-sorts your classes:
   ```bash
   npm install -D prettier prettier-plugin-tailwindcss
   ```

3. **Use the Tailwind IntelliSense VS Code extension** — autocomplete for all classes.

4. **Use `clsx` or `cn()` in React** for conditional classes:
   ```jsx
   import clsx from 'clsx';

   <div className={clsx(
     'px-4 py-2 rounded font-medium',
     isActive && 'bg-blue-600 text-white',
     !isActive && 'bg-gray-100 text-gray-700'
   )}>
   ```

5. **Don't use `!important` utilities (`!text-red-500`)** unless absolutely necessary.

6. **Prefer `gap-*` over `space-*`** — `gap` works with both flex and grid.

7. **Avoid custom CSS whenever possible** — Tailwind can handle 95% of use cases.

---

## Summary Mental Model

```
Every CSS property you know → Has a Tailwind equivalent

display: flex           →  flex
flex-direction: column  →  flex-col
justify-content: center →  justify-center
align-items: center     →  items-center
padding: 1rem           →  p-4
margin-top: 0.5rem      →  mt-2
font-size: 1.25rem      →  text-xl
font-weight: bold       →  font-bold
color: #3b82f6          →  text-blue-500
background: #3b82f6     →  bg-blue-500
border-radius: 8px      →  rounded-lg
box-shadow: ...         →  shadow-md
transition: all 200ms   →  transition duration-200
hover styles            →  hover: prefix
responsive styles       →  sm: md: lg: xl: prefixes
dark mode               →  dark: prefix
```

---

*That's the complete Tailwind CSS guide — from zero to production-ready. Start with the basics (spacing, colors, flex), then layer in responsive design and pseudo-classes, and you'll be building polished UIs in no time.*
