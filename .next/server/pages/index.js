(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 3747:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "BakeryDropListStyles_wrapper__Ud2Qc",
	"header": "BakeryDropListStyles_header__Z0NIy",
	"dropItems": "BakeryDropListStyles_dropItems__VwJKe",
	"dropItem": "BakeryDropListStyles_dropItem__jldzD",
	"productInfo": "BakeryDropListStyles_productInfo__dmA4_",
	"mediaDetail": "BakeryDropListStyles_mediaDetail__0JxCC",
	"productName": "BakeryDropListStyles_productName__i3S6i",
	"productDescription": "BakeryDropListStyles_productDescription__MNTNL",
	"productPrice": "BakeryDropListStyles_productPrice__zDDg_",
	"cartUtil": "BakeryDropListStyles_cartUtil__F5sIM",
	"cartQty": "BakeryDropListStyles_cartQty__tjnJk",
	"btn": "BakeryDropListStyles_btn__zYc0E"
};


/***/ }),

/***/ 9540:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CheckoutButtonStyles_wrapper__dtUu4",
	"checkoutButton": "CheckoutButtonStyles_checkoutButton__LrtQN"
};


/***/ }),

/***/ 5483:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "DetailsSectionStyles_wrapper__xbPwp",
	"header": "DetailsSectionStyles_header__ptGrS",
	"reviews": "DetailsSectionStyles_reviews__krS8n",
	"textWrapper": "DetailsSectionStyles_textWrapper__9imEl",
	"background": "DetailsSectionStyles_background__WM6f_"
};


/***/ }),

/***/ 8909:
/***/ ((module) => {

// Exports
module.exports = {
	"heroVidWrapper": "HeroVideoStyles_heroVidWrapper__Plojb",
	"video": "HeroVideoStyles_video__lBLOu",
	"header": "HeroVideoStyles_header__7ZnkB"
};


/***/ }),

/***/ 926:
/***/ ((module) => {

// Exports
module.exports = {
	"imgWrapper": "ImageSectionStyles_imgWrapper__GS2Ji",
	"img": "ImageSectionStyles_img__aGrd_"
};


/***/ }),

/***/ 7366:
/***/ ((module) => {

// Exports
module.exports = {
	"infowrapper": "InfoSectionStyles_infowrapper__N8v_6",
	"infoleft": "InfoSectionStyles_infoleft__r5RX1",
	"right": "InfoSectionStyles_right__eY5Vd",
	"text": "InfoSectionStyles_text__X13wp"
};


/***/ }),

/***/ 6471:
/***/ ((module) => {

// Exports
module.exports = {
	"reviewsWrapper": "ReviewsStyles_reviewsWrapper__yLvpg",
	"header": "ReviewsStyles_header__XRABR",
	"reviews": "ReviewsStyles_reviews__i1DcU",
	"quote": "ReviewsStyles_quote__SKoql",
	"quoteItem": "ReviewsStyles_quoteItem__IP0rN",
	"background": "ReviewsStyles_background__z3uCJ"
};


/***/ }),

/***/ 2471:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "ShippingStyles_wrapper__LKXjf"
};


/***/ }),

/***/ 6529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Home),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./config/index.js
const dev = "production" !== "production";
// console.log('SERVER', process.env.NEXT_PUBLIC_API);
const server = dev ? "http://localhost:1337" : process.env.NEXT_PUBLIC_API;

;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./styles/BakeryDropListStyles.module.css
var BakeryDropListStyles_module = __webpack_require__(3747);
var BakeryDropListStyles_module_default = /*#__PURE__*/__webpack_require__.n(BakeryDropListStyles_module);
;// CONCATENATED MODULE: ./components/BakeryDropItem.js



const BakeryDropItem = ({ nextDrop , cartQty , server , handleAddToCart , handleRemoveFromCart ,  })=>{
    const products = nextDrop.products;
    products.map((product)=>{
        console.log("BAKERYDROPITEM - Product Media Url", product.media.url);
    });
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (BakeryDropListStyles_module_default()).dropItems,
        children: products.map((product)=>{
            return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BakeryDropListStyles_module_default()).dropItem,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (BakeryDropListStyles_module_default()).mediaDetail,
                        children: product.media ? /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: server + product.media.url,
                            width: "200",
                            height: "200"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Product Image"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BakeryDropListStyles_module_default()).productInfo,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: (BakeryDropListStyles_module_default()).productName,
                                children: product.name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (BakeryDropListStyles_module_default()).productDescription,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: product.description_quantity
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (BakeryDropListStyles_module_default()).productPrice,
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                    children: [
                                        "$",
                                        product.price
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BakeryDropListStyles_module_default()).cartUtil,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "submit",
                                className: (BakeryDropListStyles_module_default()).btn,
                                value: "-",
                                onClick: ()=>{
                                    handleRemoveFromCart(product);
                                }
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: (BakeryDropListStyles_module_default()).cartQty,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: cartQty(product)
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "submit",
                                className: (BakeryDropListStyles_module_default()).btn,
                                value: "+",
                                onClick: ()=>{
                                    handleAddToCart(product);
                                }
                            })
                        ]
                    })
                ]
            }, product.id));
        })
    }));
};
/* harmony default export */ const components_BakeryDropItem = (BakeryDropItem);

// EXTERNAL MODULE: ./styles/ShippingStyles.module.css
var ShippingStyles_module = __webpack_require__(2471);
var ShippingStyles_module_default = /*#__PURE__*/__webpack_require__.n(ShippingStyles_module);
;// CONCATENATED MODULE: ./components/Shipping.js


const Shipping = ({ shipping , shippingOptions , handleShipping  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (ShippingStyles_module_default()).wrapper,
        children: shippingOptions.map((option, idx)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    handleShipping(option);
                    console.log("CLICKED", option);
                },
                className: shipping === option ? "btn-selected" : `btn`,
                children: option
            }, idx)
        )
    }));
};
/* harmony default export */ const components_Shipping = (Shipping);

// EXTERNAL MODULE: ./styles/CheckoutButtonStyles.module.css
var CheckoutButtonStyles_module = __webpack_require__(9540);
var CheckoutButtonStyles_module_default = /*#__PURE__*/__webpack_require__.n(CheckoutButtonStyles_module);
;// CONCATENATED MODULE: ./components/CheckoutButton.js


const CheckoutButton = ({ handleSubmit , disabled  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (CheckoutButtonStyles_module_default()).wrapper,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("form", {
                    onSubmit: handleSubmit,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        type: "submit",
                        disabled: disabled,
                        className: (CheckoutButtonStyles_module_default()).checkoutButton,
                        children: "PLACE ORDER"
                    })
                })
            })
        })
    }));
};
/* harmony default export */ const components_CheckoutButton = (CheckoutButton);

;// CONCATENATED MODULE: ./components/BakeryDropList.js






const BakeryDropList = ({ nextDrop , cartQty , server , handleAddToCart , handleRemoveFromCart , shipping , shippingOptions , handleShipping , handleSubmit , disabled ,  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (BakeryDropListStyles_module_default()).wrapper,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: (BakeryDropListStyles_module_default()).header,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: "OUR NEXT DROP"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                children: nextDrop.dropDate
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/line.svg",
                                width: "70",
                                height: "10"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_BakeryDropItem, {
                        nextDrop: nextDrop,
                        cartQty: cartQty,
                        server: server,
                        handleAddToCart: handleAddToCart,
                        handleRemoveFromCart: handleRemoveFromCart
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Shipping, {
                shipping: shipping,
                shippingOptions: shippingOptions,
                handleShipping: handleShipping
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_CheckoutButton, {
                handleSubmit: handleSubmit,
                disabled: disabled
            })
        ]
    }));
};
/* harmony default export */ const components_BakeryDropList = (BakeryDropList);

// EXTERNAL MODULE: ./styles/DetailsSectionStyles.module.css
var DetailsSectionStyles_module = __webpack_require__(5483);
var DetailsSectionStyles_module_default = /*#__PURE__*/__webpack_require__.n(DetailsSectionStyles_module);
;// CONCATENATED MODULE: ./components/DetailsSection.js



const DetailsSection = ({ nextDrop  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (DetailsSectionStyles_module_default()).wrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (DetailsSectionStyles_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "How it works"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/line.svg",
                            width: "70",
                            height: "10"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (DetailsSectionStyles_module_default()).reviews,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "Bakerrae is an online bakery with popups in the GTA. Our baked goods are available exclusively online. We rotate our flavours as we become inspired."
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "1. Place your pre-order online up to 48hrs before the next drop."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "2. Select whether you would like pick-up (free) or delivery ($10 flat)*."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "3. Keep your baked goods cool on the way home. To reheat, microwave for a few seconds, or bake at 350 for a few minutes."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "We have limited space each drop. If it sells out, please follow our Instagram and sign up to our email list to hear when the next drop is."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h4", {
                                children: [
                                    "The next drop is on ",
                                    nextDrop.dropDate
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Local Delivery"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Downtown, North York, Scarborough, Etobicoke"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "GTA Delivery"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Mississauga, Markham, Vaughan, Richmond Hill, Brampton"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (DetailsSectionStyles_module_default()).textWrapper,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Pickup Points"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Pickups are from 9am - 11am."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    children: "Pickups are available in Scarborough (Eg Go) and Downtown TO (Union)."
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_DetailsSection = (DetailsSection);

// EXTERNAL MODULE: ./styles/InfoSectionStyles.module.css
var InfoSectionStyles_module = __webpack_require__(7366);
var InfoSectionStyles_module_default = /*#__PURE__*/__webpack_require__.n(InfoSectionStyles_module);
;// CONCATENATED MODULE: ./components/InfoSection.js



const InfoSection = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (InfoSectionStyles_module_default()).infowrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (InfoSectionStyles_module_default()).infoleft,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (InfoSectionStyles_module_default()).image2,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/cinnamondonuts-min.JPG",
                                width: "333",
                                height: "445"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (InfoSectionStyles_module_default()).text,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "A nurse with a passion."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Bakerrae was started by Rhea, a covid testing nurse, amidst the lockdowns."
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (InfoSectionStyles_module_default()).right,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (InfoSectionStyles_module_default()).text,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                    children: "Filipino-inspired baked goods & cold brew concentrate."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    children: "Woman-run. Small-batch. Asian flavours."
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (InfoSectionStyles_module_default()).image1,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                src: "/cinnamonbuns.JPG",
                                width: "300",
                                height: "400"
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_InfoSection = (InfoSection);

// EXTERNAL MODULE: ./styles/ReviewsStyles.module.css
var ReviewsStyles_module = __webpack_require__(6471);
var ReviewsStyles_module_default = /*#__PURE__*/__webpack_require__.n(ReviewsStyles_module);
;// CONCATENATED MODULE: ./components/Reviews.js



const Reviews = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ReviewsStyles_module_default()).reviewsWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ReviewsStyles_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "What people are saying"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/line.svg",
                            width: "70",
                            height: "10"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (ReviewsStyles_module_default()).reviews,
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (ReviewsStyles_module_default()).quote,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                    className: (ReviewsStyles_module_default()).quoteItem,
                                    children: "\"My brother just had some and said it's the best homemade frosting he's ever tasted... and he's picky hahah.\""
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: (ReviewsStyles_module_default()).quoteItem
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ReviewsStyles_module_default()).quote,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "\"The donuts were amazing! The dough was surprisingly light and the creams had the perfect amount of sweetness.\""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (ReviewsStyles_module_default()).quote,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                children: "\"SO GOOD! My mom doesn't usually like ube, but she almost ate the entire doughnut. I had to stop her so I can try some!!!\""
                            })
                        })
                    ]
                })
            ]
        })
    }));
};
/* harmony default export */ const components_Reviews = (Reviews);

// EXTERNAL MODULE: ./styles/HeroVideoStyles.module.css
var HeroVideoStyles_module = __webpack_require__(8909);
var HeroVideoStyles_module_default = /*#__PURE__*/__webpack_require__.n(HeroVideoStyles_module);
;// CONCATENATED MODULE: ./components/HeroVideo.js



const HeroVideo = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (HeroVideoStyles_module_default()).heroVidWrapper,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (HeroVideoStyles_module_default()).header,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: "As seen on BlogTO"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                            src: "/line.svg",
                            width: "70",
                            height: "10"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "sectionOrange",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (HeroVideoStyles_module_default()).video,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                            width: "520",
                            height: "520",
                            src: "https://www.youtube.com/embed/UtPprUWteeo",
                            title: "Baker Rae x Cafe",
                            frameBorder: "0",
                            allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; modestbranding;",
                            allowFullScreen: true
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_HeroVideo = (HeroVideo);

// EXTERNAL MODULE: ./styles/ImageSectionStyles.module.css
var ImageSectionStyles_module = __webpack_require__(926);
var ImageSectionStyles_module_default = /*#__PURE__*/__webpack_require__.n(ImageSectionStyles_module);
;// CONCATENATED MODULE: ./components/ImageSection.js



const ImageSection = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (ImageSectionStyles_module_default()).imgWrapper,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ImageSectionStyles_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/product_halohalo.jpg",
                        width: "500",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ImageSectionStyles_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/raetorchsquare.jpg",
                        width: "500",
                        height: "500"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (ImageSectionStyles_module_default()).img,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: "/balikabayansquare.jpg",
                        width: "500",
                        height: "500"
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_ImageSection = (ImageSection);

// EXTERNAL MODULE: ./components/FaqComponent.js + 1 modules
var FaqComponent = __webpack_require__(2237);
// EXTERNAL MODULE: ./components/Footer.js
var Footer = __webpack_require__(3193);
// EXTERNAL MODULE: ./utils/content.js
var content = __webpack_require__(3573);
;// CONCATENATED MODULE: ./pages/index.js













function Home({ data: data1  }) {
    const router = (0,router_namespaceObject.useRouter)();
    const { 0: cart , 1: setCart  } = (0,external_react_.useState)([]);
    const { 0: shipping , 1: setShipping  } = (0,external_react_.useState)("Free Pickup (Scarborough)");
    const { 0: disabled , 1: setDisabled  } = (0,external_react_.useState)(true);
    const shippingOptions = [
        "Free Pickup (Scarborough)",
        "Free Pickup (Toronto)",
        "Local Delivery ($8)",
        "GTA Delivery ($10)", 
    ];
    const itemInCart1 = (product)=>{
        let itemInCart = cart.find((item)=>item.product.id === product.id
        );
        return itemInCart;
    };
    const cartQty = (product)=>{
        return itemInCart1(product) ? itemInCart1(product).quantity : 0;
    };
    const checkReadyToCheckout = ()=>{
        if (cart.length > 0) {
            return setDisabled(false);
        } else {
            return setDisabled(true);
        }
    };
    const handleAddToCart = (product)=>{
        let cartMap;
        if (itemInCart1(product)) {
            cartMap = cart.map((cartItem, i)=>{
                return cartItem.product.id === itemInCart1(product).product.id ? {
                    ...cartItem,
                    quantity: cartItem.quantity + 1
                } : cartItem;
            });
        } else {
            cartMap = [
                ...cart,
                {
                    product,
                    quantity: 1
                }
            ];
        }
        return setCart([
            ...cartMap
        ]);
    };
    const handleRemoveFromCart = (product)=>{
        let cartMap;
        if (itemInCart1(product)) {
            cartMap = cart.map((cartItem, i)=>{
                if (cartItem.product.id === itemInCart1(product).product.id) {
                    if (cartItem.quantity <= 1) {
                        return {
                            ...cartItem,
                            quantity: 0
                        };
                    } else {
                        return {
                            ...cartItem,
                            quantity: cartItem.quantity - 1
                        };
                    }
                } else {
                    return cartItem;
                }
            });
        } else {
            cartMap = [
                ...cart
            ];
        }
        const cleanCartMap = cartMap.filter((item)=>item.quantity !== 0
        );
        return setCart([
            ...cleanCartMap
        ]);
    };
    const handleShipping = (shippingOption)=>{
        console.log("Shipping selected", shipping);
        return setShipping(shippingOption);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log("going to checkout");
        const data = JSON.stringify({
            cart,
            shipping: shipping
        });
        const res = await fetch(`${server}/orders/checkout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: data
        });
        const url = await res.text();
        router.push(url);
    };
    const today = new Date();
    const upcomingDrops = data1.filter((drop)=>new Date(drop.dropDate) > today
    );
    const nextDropDate = new Date(Math.min(...upcomingDrops.map((e)=>{
        return new Date(e.dropDate);
    })));
    const nextDrop = data1.filter((e)=>{
        const d = new Date(e.dropDate);
        return d.getTime() == nextDropDate.getTime();
    })[0];
    (0,external_react_.useEffect)(()=>{
        console.log("CART: ", JSON.stringify(cart, null, 4));
        checkReadyToCheckout();
    }, [
        cart
    ]);
    (0,external_react_.useEffect)(()=>{
        console.log("SHIPPING SELECTION: ", JSON.stringify(shipping, null, 4));
    }, [
        shipping
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_InfoSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_BakeryDropList, {
                nextDrop: nextDrop,
                cart: cart,
                cartQty: cartQty,
                server: server,
                handleAddToCart: handleAddToCart,
                handleRemoveFromCart: handleRemoveFromCart,
                shipping: shipping,
                shippingOptions: shippingOptions,
                handleShipping: handleShipping,
                handleSubmit: handleSubmit,
                disabled: disabled
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_DetailsSection, {
                nextDrop: nextDrop
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_HeroVideo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Reviews, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FaqComponent/* default */.Z, {
                faqData: content/* faqData */.E
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {})
        ]
    }));
};
const getServerSideProps = async ()=>{
    // console.log('PROCESS ENV', process.env);
    console.log('SERVER NEXT PUBLIC API', process.env.NEXT_PUBLIC_API);
    console.log('USING SERVER: ', `${server}`);
    const res = await fetch(`${server}/bakerydrops`);
    const data = await res.json();
    // console.log("DATA", data);
    if (!data) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            data
        }
    };
};


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,889,193], () => (__webpack_exec__(6529)));
module.exports = __webpack_exports__;

})();