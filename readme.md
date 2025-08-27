
**Question 1.** What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

**Answer Question1:**
1. **document.getElementById(“id”)** এটা শুধু dom থেকে একটা নির্দিষ্ট element খুজে বের আনতে সাহায্য করে। id এর সাথে যেটা মিলবে সেটাই দিবে। যদি id এর সাথে না মিলে তাহলে null দিবে। এটা সবসময় একটা element দেয়। একটা অবজেক্ট হিসেবে দেয়ার কারনে এর সব কিছু নিয়ে কাজ করা যায়
   **Example**
   **document.getElementById(“clear-btn”)**
   এখনে যে element এ এই id আছে ওইটা রিটার্ন করবে

2. **document.getElementsByClassName(“className”)** এটা একই class name এর যত element আছে সব রিটার্ন করবে একটা Array like object হিসেবে কিন্তু পুরোপুরি Array না। যখন আমরা একসাথে অনেক গুলো element এর কোন কিছু করতে চাই তখন এটা দিয়ে করা যায়।
   **Example**
   **document.getElementsByClassName(“ copy-btn”)**
   এটা যেসব element এ এই ক্লাস টা আছে ওদের একটা array like object এর মধ্যে দিয়ে দিবে।

3. **document.querySelector(css selector)** এটার সাহায্য css selector যেমন class id tag এগুলা use করে dom থেকে কোন element কে access করতে পারি। এটা শুধু প্রথমে যেটা পাবে সেটাকে রিটার্ন করবে। এখানে আমরা complex css query চালাতে পারি যেমন div>p।
   **Example**
   **document.querySelector(“#id”)**
   **document.querySelector(“.className”)**
   **document.querySelector(“Div>p”)**

document.querySelectorAll (css selector ) এটা সব element রিটার্ন করবে একটা nodelist হিসেবে যাদের মধ্যে selector আছে।



---
**Question2.** How do you **create and insert a new element into the DOM**?  

.**Answer Question2:**
নতুন element তৈরি করার জন্য document.createElement() এটা ব্যবহার করা হয়।
Example:
const div = document.createElement("div")
এখানে নতুন একটা div element তৈরি করা হচ্ছে।
এর পর এর innerHTML দিয়ে দিতে পারি
Example:
div.innerHTML = `

 <h> hello </h1>
`
এখন যেখানে নতুন element insert করব সেটা DOM থেকে নিয়ে আসতে হবে
যেমন
const container = document.getElementById("div-container")

এখানে DOM থেকে div-container আইডি দিয়ে ওই container কে নিয়ে এসেছি এখন এর child হিসেবে নতুন তৈরি করা element টা দিয়ে দিব।
container.appendChild(div)

---
3. What is **Event Bubbling** and how does it work?
   
**Answer Question3:**
Even Bubbling হচ্ছে যখন কোন event create হয় তখন প্রথমে যে element এ ঘটেছে সেখানে যায় এটা target element বলে। সেখানে কোন লিসেনার থাকলে সেটা execute হয়। এর পর ধাপে ধাপে সেটা তার parent element গুলোতে ছড়িয়ে পরে।
যেমন:
একটি button ক্লিক করলে, যা একটি div-এর ভিতরে আছে এবং সেটি আবার body-এর ভিতরে।
প্রথমে ইভেন্ট button-এ triggered হবে। তারপর সেটা div-এ যাবে, এখানে লিসেনার থাকলে এটাও execute হবে। তারপর সেটা body পর্যন্ত পৌঁছে যাবে। যেখানে লিসেনার পাবে, বাবলিং-এর সময় সেটাই execute করবে।
এইখানে তিনটা ধাপে হবে:
প্রথমে capture phase-এ যেখানে triggered হয়েছে সেখানে যাবে।
তারপর target phase-এ target element-এ কোন লিসেনার থাকলে সেটা execute হবে।
এরপর বাবলিং শুরু হবে। parent element-এ কোন লিসেনার থাকলে সেটা execute হবে, এভাবে ধাপে ধাপে document পর্যন্ত পৌঁছে যাবে।


---
4. What is **Event Delegation** in JavaScript? Why is it useful?
   
**Answer Question4:**
Event Delegation হচ্ছে এমন একটা technique যেখানে প্রতিটা child element কে আলাদা লিসেনার না দিয়ে তার parent element-এ listener add করে event.target ব্যবহার করে তার child-এ যেখানে event trigger হয়েছে সেখানে কোন action perform করতে পারি।

এখানে বাবলিং কাজে লাগে। যখন কোন child element-এ event trigger হয়, তখন এটি bubble করে parent element-এ এসে পৌঁছায়। তারপর event.target ব্যবহার করে ওই নির্দিষ্ট child-এর উপর action নেওয়া যায়।
আমরা সাধারণত আলাদা আলাদা child element-এ listener attach করতে পারি। কিন্তু Event Delegation-এ parent element-এ একটি listener attach করে তার child-এ action নিতে পারি।

Event  Delegation এর উপকারিতা :
আলাদা আলাদা child element ব্যবহার করলে memory বেশি লাগে, তাই Event Delegation-এর মাধ্যমে parent element-এ listener add করে অনেক memory বাঁচানো যায়। আবার নতুন child element add হলে আলাদা করে listener attach করতে হয় না। কোডও কম হয় এবং maintain করা সহজ হয়।

---
5. What is the difference between **preventDefault() and stopPropagation()** methods?
**Answer Question5:**
1) preventDefault() এটা ব্যাবহার করে কোন একটা event এর default আচরণ বন্ধ করতে পারি 
যেমন 
একটি form এর submit button এ ক্লিক করলে normally page reload হয়। preventDefault() দিয়ে এই page reload বন্ধ করা যায়। 
2) stopPropagation()এটা Event এর বাবলিং বন্ধ করার কাজে লাগে। যাতে event এর parent ছড়িয়ে যাবে না। 
যেমন 
একটি button একটা div এর ভিতরে আছে। এখন button এ click listener এর সময়  stopPropagation() এড করে দিলে div এর মধ্যে কোন  listener থাকলে সেটা  trigger হবে না।
---