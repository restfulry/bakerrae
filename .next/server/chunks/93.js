exports.id = 93;
exports.ids = [93];
exports.modules = {

/***/ 8008:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_FaqComponent; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./styles/FaqStyles.module.css
var FaqStyles_module = __webpack_require__(9425);
var FaqStyles_module_default = /*#__PURE__*/__webpack_require__.n(FaqStyles_module);
;// CONCATENATED MODULE: ./components/Accordion.js





const Accordion = ({
  question,
  answer,
  idx
}) => {
  const {
    0: isActive,
    1: setIsActive
  } = (0,external_react_.useState)(false);

  const handleIsActive = () => {
    setIsActive(!isActive);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (FaqStyles_module_default()).accordionItem,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (FaqStyles_module_default()).accordionTitle,
      onClick: handleIsActive,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          children: question
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: isActive ? "-" : "+"
      })]
    }), isActive && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (FaqStyles_module_default()).accordionContent,
      children: answer
    })]
  }, idx);
};

/* harmony default export */ var components_Accordion = (Accordion);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/FaqComponent.js






const FaqComponent = ({
  faqData
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "container",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (FaqStyles_module_default()).faqWrapper,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (FaqStyles_module_default()).subHeader,
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          children: "General FAQs"
        }), /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: "/line.svg",
          width: "70",
          height: "10"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (FaqStyles_module_default()).faqAccordion,
        children: faqData.map(({
          question,
          answer,
          idx
        }) => /*#__PURE__*/jsx_runtime_.jsx(components_Accordion, {
          question: question,
          answer: answer,
          idx: idx
        }))
      }, "faqAccordion")]
    })
  });
};

/* harmony default export */ var components_FaqComponent = (FaqComponent);

/***/ }),

/***/ 4824:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": function() { return /* binding */ faqData; }
/* harmony export */ });
const faqData = [{
  question: "How do I get my hands on your products?",
  answer: "You can make an order using our website or you can send us a DM on our Instagram (@bakerraexcafe)."
}, {
  question: "When are your drop dates?",
  answer: "Our pre-orders open bi-weekly and until we sell out of our limited stock. We will always update our website and Instagram for the next drops and when you can start pre-ordering."
}, {
  question: "Where and when do you deliver?",
  answer: "We deliver every Sunday on the week of drops, starting from the morning until all orders have been delivered. We are currently delivering all around the GTA (Scarborough,  North York, Markham, Toronto, Etobicoke, Mississauga) with additional fees depending on location."
}, {
  question: "Can I pick-up my order?",
  answer: "Yes, pickups are free of charge with no minimum purchase. Pickups will only be available from 9am-11am."
}, {
  question: "Where are your pickup locations?",
  answer: "We have pickup in Scarborough (near Eg GO) and Downtown Toronto (near Victoria & King E)."
}, {
  question: "How long do your cinnamon buns keep?",
  answer: "Though we recommend you consume your buns as soon as possible (for the best quality), cinnamon rolls actually keep quite well. You can keep them in an airtight container in the refrigerator for up to 1 week and microwave in increments of 30 seconds, no longer than 1 minute."
}, {
  question: "How long do your donuts keep?",
  answer: "Our donuts are best consumed the day of but can be kept in an airtight container for up to 2 days. When consumed next day, donut can be eaten as is or warmed up for 30 seconds in the microwave."
}, {
  question: "Are your cinnamon buns nut-free?",
  answer: "We currently do not use any nuts in our recipe, however our commercial kitchen may not be nut-free."
}, {
  question: "Do your cinnamon buns/donuts contain dairy or eggs?",
  answer: "Our cinnamon buns and donuts both contain dairy but the buns are egg-free. Some fillings or toppings may be made with egg such as our kaya.Open to requests for dairy substitutions (plant-based milk, i.e. oat) to better accomodate you (*prices may differ)."
}, {
  question: "How many servings do each of your bottles make?",
  answer: "Each bottle of our cold brew concentrate serves an average of 2-4 cups of coffee (can be more or less depending on your preference)."
}, {
  question: "What is the shelf life of your cold brew concentrate.",
  answer: "Please consume within 2 weeks and keep refrigerated."
}, {
  question: "Can I store it in room temperature?",
  answer: "No. Cold brew concentrate must be refrigerated immediately. When stored in room temperature (especially during warmer months) it can easily change taste and flavour in just 24 hours."
}, {
  question: "Can I drink my cold brew concentrate straight from the bottle?",
  answer: "Yes, if you prefer your coffee black. Just be mindful that cold brew concentrate is highly caffeinated."
}, {
  question: "Can I return my bottles?",
  answer: "Though our bottles are highly recommended to be re-used and re-purposed, we do offer a 5% discount on your next cold brew purchase when you return your bottles."
}];

/***/ }),

/***/ 9425:
/***/ (function(module) {

// Exports
module.exports = {
	"header": "FaqStyles_header__3RYMe",
	"faqWrapper": "FaqStyles_faqWrapper__Bb8XU",
	"subHeader": "FaqStyles_subHeader__1OC-T",
	"faqAccordion": "FaqStyles_faqAccordion__2tZC2",
	"accordionItem": "FaqStyles_accordionItem__20lNQ",
	"accordionTitle": "FaqStyles_accordionTitle__2S9um",
	"accordionContent": "FaqStyles_accordionContent__3UHrZ"
};


/***/ })

};
;