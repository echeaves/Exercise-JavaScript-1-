let article = {
  title: 'Why Accessibility Matters in UI UX Design',
  date: 'May 25, 2023',
  description: 'Accessibility is a word that is often thrown around in the design field. As a UI/UX Web Designer, you might have heard this word a few times and you might wonder why it’s important.'
}
  
let title = document.getElementById('title');
let date = document.getElementById('date');
let description = document.getElementById('description');
  
title.textContent = article.title;
date.textContent = article.date;
description.textContent = article.description;

let articleWebAccessibility = {
  articleTitle: 'Web Accessibility – Best Practices and a Checklist for Developers',
  articleDate:  'November 30, 2022',
  articleDescription:  'The World Health Organization reports that about 15% (1.2 billion) of the worlds population lives with some form of disability.'
}

let articleTitle = document.getElementById('articleTitle');
let articleDate = document.getElementById('articleDate');
let articleDescription = document.getElementById('articleDescription');

articleTitle.textContent = articleWebAccessibility.articleTitle;
articleDate.textContent = articleWebAccessibility.articleDate;
articleDescription.textContent = articleWebAccessibility.articleDescription;
