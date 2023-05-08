// Copyright (c) 2022 Alyssia fungAll rights reserved
//
// Created by: Alyssia fung
// Created on: May 2023
// This file contains the JS functions for index.html

"use strict"

function button() {
  // input setting
  const lengthAString = parseInt(document.getElementById("lengthA").value)
  const lengthBString = parseInt(document.getElementById("lengthB").value)
  const lengthCString = parseInt(document.getElementById("lengthC").value)

  const lengthA = parseFloat(lengthAString)
  const lengthB = parseFloat(lengthBString)
  const lengthC = parseFloat(lengthCString)

  // process
  const angleA =
    Math.acos(
      (lengthB ** 2 + lengthC ** 2 - lengthA ** 2) / (2 * lengthB * lengthC)
    ) *
    (180 / Math.PI)
  const angleB =
    Math.acos(
      (lengthC ** 2 + lengthA ** 2 - lengthB ** 2) / (2 * lengthC * lengthA)
    ) *
    (180 / Math.PI)
  const angleC =
    Math.acos(
      (lengthA ** 2 + lengthB ** 2 - lengthC ** 2) / (2 * lengthA * lengthB)
    ) *
    (180 / Math.PI)

  if (angleA == angleB && angleA == angleC) {
    document.getElementById("answer").innerHTML =
      "You have an equilateral triangle!"
  } else if (angleA != angleB && angleA != angleC && angleB != angleC) {
    document.getElementById("answer").innerHTML = "You have an scalene triangle!"
  } else if (
    (angleA != angleB && angleA == angleC) ||
    (angleA == angleB && angleA != angleC)
  ) {
    document.getElementById("answer").innerHTML =
      "You have an isosceles triangle!"
  } else {
    document.getElementById("answer").innerHTML = "This triangle doesn't exist."
  }
}
