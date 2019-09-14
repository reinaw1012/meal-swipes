// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.


'use strict';
var total_meals = 12;

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  chrome.tabs.executeScript(
      tabs[0].id,
      {file: 'count.js'})
});

chrome.storage.local.get(["totalCount"], function(result) {
  let div = document.createElement('div');
  div.innerHTML = "Meals left this week: " + (total_meals - result.totalCount);
  document.body.append(div);
});

//total_meals = localStorage.getItem('totalCount');
