unlayer.registerTool(
    {
   
      name: "product",
      label: "Product",
      icon: "fa-cart-shopping",
      supportedDisplayModes: ["web", "email"],
      options: {
          default: {
              
          },
          
          setting: {
            title: "Setting",
            position: 1,
            options: {
                rows: {
                    label: "Total Rows",
                    defaultValue: "1",
                    widget: "counter"
                },
                columns: {
                    label: "Total Column",
                    defaultValue: "1",
                    widget: "counter"
                },
                 isDynamicProducts: {
                    label: "Products from Quiz Result",
                    defaultValue: true,
                    widget: "toggle"
                },
                isShowProductTitle: {
                    label: "Show Product Title",
                    defaultValue: true,
                    widget: "toggle"
                },
                isShowProductDescription: {
                    label: "Show Product Description",
                    defaultValue: true,
                    widget: "toggle"
                },
                isShowProductPrice: {
                    label: "Show Product Price",
                    defaultValue: true,
                    widget: "toggle"
                },
                mainBackgroundColor:{
                    label:"Background Color",
                    defaultValue:"#FFFFFF",
                    widget: "color_picker"
                },
                mainPadding:{
                    label:"Padding",
                    defaultValue:"0px",
                    widget: "margin"
                },
                
                mainFontFamily:{
                    label:"Font Family",
                    defaultValue:{
                        label: 'Arial',
                        value: 'arial,helvetica,sans-serif'
                      },
                    widget: "font_family"
                },
                mainMargin:{
                    label:"Margin",
                    defaultValue:"0px",
                    widget: "margin"
                },
                mainBorder:{
                    label:"Border",
                  defaultValue:{
                    borderTopWidth: "0px",
                    borderTopStyle: "solid",
                    borderTopColor: "#CCC",
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "#CCC",
                    borderRightWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightColor: "#CCC",
                    borderBottomWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#CCC"
                  },
                       widget: "border"
                },
                mainBorderRadius:{
                    label:"Border Radius",
                    defaultValue:"1",
                       widget: "counter"
                },
                mainCss:{
                    label:"Custom CSS",
                    defaultValue:"",
                    widget:"text"
                }
            }
        },
        title: {
            title: "Title",
            position: 2,
            options: {
                productTitle: {
                    label: "Title",
                    defaultValue: "Product Title",
                    widget: "text"
                },
                titleFontColor:{
                    label:"Text Color",
                    defaultValue:"#000",
                    widget: "color_picker"
                },
                titleBackgroundColor:{
                    label:"Background Color",
                    defaultValue:"inherit",
                       widget: "color_picker"
                },
                titleFontSize: {
                    label: "Font Size",
                    defaultValue: "18",
                    widget: "counter"
                },
                titleTextAlign: {
                    label: "Align",
                    defaultValue: "center",
                    widget: "alignment"
                },
               
                isTitleBold:{
                    label:"Bold",
                    defaultValue:true,
                       widget: "toggle"
                },
                isTitleItalic:{
                    label:"Italic",
                    defaultValue:false,
                       widget: "toggle"
                },
                isTitleUnderline:{
                    label:"Underline",
                    defaultValue:false,
                       widget: "toggle"
                },
                titlePadding:{
                    label:"Padding",
                    defaultValue:"0px",
                    widget: "margin"
                },
                titleBorder:{
                    label:"Border",
                  defaultValue:{
                    borderTopWidth: "0px",
                    borderTopStyle: "solid",
                    borderTopColor: "#CCC",
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "#CCC",
                    borderRightWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightColor: "#CCC",
                    borderBottomWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#CCC"
                  },
                       widget: "border"
                },
                titleBorderRadius:{
                    label:"Border Radius",
                    defaultValue:"1",
                       widget: "counter"
                },
                titleCss:{
                    label:"Custom CSS",
                    defaultValue:"",
                    widget:"text"
                }
            }
        },
          description: {
            title: "Description",
            position: 2,
            options: {
                productDescription: {
                    label: "description",
                    defaultValue: "Product description",
                    widget: "rich_text"
                },
                descriptionFontColor:{
                    label:"Text Color",
                    defaultValue:"#000",
                    widget: "color_picker"
                },
                descriptionBackgroundColor:{
                    label:"Background Color",
                    defaultValue:"inherit",
                       widget: "color_picker"
                },
                descriptionFontSize: {
                    label: "Font Size",
                    defaultValue: "16",
                    widget: "counter"
                },
                descriptionTextAlign: {
                    label: "Align",
                    defaultValue: "center",
                    widget: "alignment"
                },
               
                isDescriptionBold:{
                    label:"Bold",
                    defaultValue:false,
                       widget: "toggle"
                },
                isDescriptionItalic:{
                    label:"Italic",
                    defaultValue:false,
                       widget: "toggle"
                },
                isDescriptionUnderline:{
                    label:"Underline",
                    defaultValue:false,
                       widget: "toggle"
                },
                descriptionPadding:{
                    label:"Padding",
                    defaultValue:"0px",
                    widget: "margin"
                },
                descriptionBorder:{
                    label:"Border",
                  defaultValue:{
                    borderTopWidth: "0px",
                    borderTopStyle: "solid",
                    borderTopColor: "#CCC",
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "#CCC",
                    borderRightWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightColor: "#CCC",
                    borderBottomWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#CCC"
                  },
                       widget: "border"
                },
                descriptionBorderRadius:{
                    label:"Border Radius",
                    defaultValue:"1",
                       widget: "counter"
                },
                descriptionCss:{
                    label:"Custom CSS",
                    defaultValue:"",
                    widget:"text"
                }
            }
        },
        price: {
            title: "Price",
            position: 2,
            options: {
                productPrice: {
                    label: "price",
                    defaultValue: "$ 2.99",
                    widget: "text"
                },
                priceFontColor:{
                    label:"Text Color",
                    defaultValue:"#3AAEE0",
                    widget: "color_picker"
                },
                priceBackgroundColor:{
                    label:"Background Color",
                    defaultValue:"inherit",
                       widget: "color_picker"
                },
                priceFontSize: {
                    label: "Font Size",
                    defaultValue: "16",
                    widget: "counter"
                },
                priceTextAlign: {
                    label: "Align",
                    defaultValue: "center",
                    widget: "alignment"
                },
               
                isPriceBold:{
                    label:"Bold",
                    defaultValue:true,
                       widget: "toggle"
                },
                isPriceItalic:{
                    label:"Italic",
                    defaultValue:false,
                       widget: "toggle"
                },
                isPriceUnderline:{
                    label:"Underline",
                    defaultValue:false,
                       widget: "toggle"
                },
                pricePadding:{
                    label:"Padding",
                    defaultValue:"0px",
                    widget: "margin"
                },
                priceBorder:{
                    label:"Border",
                  defaultValue:{
                    borderTopWidth: "0px",
                    borderTopStyle: "solid",
                    borderTopColor: "#CCC",
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "#CCC",
                    borderRightWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightColor: "#CCC",
                    borderBottomWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#CCC"
                  },
                       widget: "border"
                },
                priceBorderRadius:{
                    label:"Border Radius",
                    defaultValue:"1",
                       widget: "counter"
                },
                priceCss:{
                    label:"Custom CSS",
                    defaultValue:"",
                    widget:"text"
                }
            }
        },
        button: {
    title: "Button",
    position: 2,
    options: {
        productButton: {
            label: "button",
            defaultValue: "Buy Now",
            widget: "text"
        },
        productButtonLink: {
            label: "Link",
            defaultValue: {
                href: 'http://google.com',
                target: '_blank'
              },
            widget: "link"
        },
        productButtonWidth: {
            label: "Width (%)",
            defaultValue: "100",
            widget: "counter"
        },
        buttonFontColor:{
            label:"Text Color",
            defaultValue:"#fff",
            widget: "color_picker"
        },
        buttonBackgroundColor:{
            label:"Background Color",
            defaultValue:"#3AAEE0",
               widget: "color_picker"
        },
        buttonFontSize: {
            label: "Font Size",
            defaultValue: "18",
            widget: "counter"
        },
        buttonTextAlign: {
            label: "Align",
            defaultValue: "center",
            widget: "alignment"
        },
       
        isButtonBold:{
            label:"Bold",
            defaultValue:false,
               widget: "toggle"
        },
        isButtonItalic:{
            label:"Italic",
            defaultValue:false,
               widget: "toggle"
        },
        isButtonUnderline:{
            label:"Underline",
            defaultValue:false,
               widget: "toggle"
        },
        buttonPadding:{
            label:"Padding",
            defaultValue:"7px",
            widget: "margin"
        },
        buttonBorder:{
            label:"Border",
          defaultValue:{
            borderTopWidth: "0px",
            borderTopStyle: "solid",
            borderTopColor: "#CCC",
            borderLeftWidth: "0px",
            borderLeftStyle: "solid",
            borderLeftColor: "#CCC",
            borderRightWidth: "0px",
            borderRightStyle: "solid",
            borderRightColor: "#CCC",
            borderBottomWidth: "0px",
            borderBottomStyle: "solid",
            borderBottomColor: "#CCC"
          },
               widget: "border"
        },
        buttonBorderRadius:{
            label:"Border Radius",
            defaultValue:"1",
               widget: "counter"
        },
        buttonCss:{
            label:"Custom CSS",
            defaultValue:"",
            widget:"text"
        }
    }
},
          image: {
            title: "Image",
            position: 3,
            options: {
                image: {
                    label: "Image",
                    defaultValue: { 
                        autoWidth:true,
                        maxWidth: "100%"
                        ,url: 'https://gaac.vercel.app/assets/images/mascot.png', width: 500, height: 100 },
                    widget: "image"
                },
                imagePadding:{
                    label:"Padding",
                    defaultValue:"0px",
                    widget: "margin"
                },
                imageBorder:{
                    label:"Border",
                  defaultValue:{
                    borderTopWidth: "0px",
                    borderTopStyle: "solid",
                    borderTopColor: "#CCC",
                    borderLeftWidth: "0px",
                    borderLeftStyle: "solid",
                    borderLeftColor: "#CCC",
                    borderRightWidth: "0px",
                    borderRightStyle: "solid",
                    borderRightColor: "#CCC",
                    borderBottomWidth: "0px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "#CCC"
                  },
                       widget: "border"
                },
                imageBorderRadius:{
                    label:"Border Radius",
                    defaultValue:"1",
                       widget: "counter"
                },
                imageCss:{
                    label:"Custom CSS",
                    defaultValue:"",
                    widget:"text"
                }
            }
        }
      },
      values: {},
      renderer: {

          Viewer: unlayer.createViewer({
              render: e => {
                let userHtml = "";
                let productSection = "";
                
                userHtml += `<table isDynamicProducts="${e.isDynamicProducts}" style=" font-family:${e.mainFontFamily.value}; ${e.mainCss}" class="hello responsive quizell-product-table" role="presentation" width="100%" cellspacing="0" cellpadding="0">`;
                
                for (let i = 0; i < +e.rows; i++) {
                    productSection += `<tr class="quizell-product-row">`;
                    
                    for (let j = 0; j < +e.columns; j++) {
                        productSection += `
                            <td class="quizell-product-cell" style="">
                                <div class="quizell-product-card" style="background-color:${e.mainBackgroundColor}; padding:${e.mainPadding}; margin:${e.mainMargin};   border-top: ${e.mainBorder.borderTopWidth} ${e.mainBorder.borderTopStyle} ${e.mainBorder.borderTopColor};
    border-left: ${e.mainBorder.borderLeftWidth} ${e.mainBorder.borderLeftStyle} ${e.mainBorder.borderLeftColor};
    border-right: ${e.mainBorder.borderRightWidth} ${e.mainBorder.borderRightStyle} ${e.mainBorder.borderRightColor};
    border-bottom: ${e.mainBorder.borderBottomWidth} ${e.mainBorder.borderBottomStyle} ${e.mainBorder.borderBottomColor}; border-radius:${e.mainBorderRadius}px; ">
                                    <!-- Your product card template goes here -->
                                    <div class="w-100">
                                        <div class="w-100">
                                            <div class="quizell-product-image w-100" style="padding:${e.imagePadding};   border-top: ${e.imageBorder.borderTopWidth} ${e.imageBorder.borderTopStyle} ${e.imageBorder.borderTopColor};
    border-left: ${e.imageBorder.borderLeftWidth} ${e.imageBorder.borderLeftStyle} ${e.imageBorder.borderLeftColor};
    border-right: ${e.imageBorder.borderRightWidth} ${e.imageBorder.borderRightStyle} ${e.imageBorder.borderRightColor};
    border-bottom: ${e.imageBorder.borderBottomWidth} ${e.imageBorder.borderBottomStyle} ${e.imageBorder.borderBottomColor}; border-radius:${e.imageBorderRadius}px; ${e.imageCss}" >
                                                <img style="width:${e.image.autoWidth?'100%':e.image.maxWidth}; overflow:hidden"  src="${e.image.url}" />
                                            </div>
                                        </div>
                                        <div class="product-card-body mt-2">
                                            <h3 class="quizell-product-title  " style="font-style:${e.isTitleItalic?'italic':'normal'}; display:${!e.isShowProductTitle?'none':'block'}; font-weight:${e.isTitleBold?'bold':'normal'}; text-decoration:${e.isTitleUnderline?'underline':'none'}; padding:${e.titlePadding}; font-size:${e.titleFontSize}px; text-align:${e.titleTextAlign}; color:${e.titleFontColor}; background-color:${e.titleBackgroundColor}; border-radius:${e.titleBorderRadius}px;  border-top: ${e.titleBorder.borderTopWidth} ${e.titleBorder.borderTopStyle} ${e.titleBorder.borderTopColor};
    border-left: ${e.titleBorder.borderLeftWidth} ${e.titleBorder.borderLeftStyle} ${e.titleBorder.borderLeftColor};
    border-right: ${e.titleBorder.borderRightWidth} ${e.titleBorder.borderRightStyle} ${e.titleBorder.borderRightColor};
    border-bottom: ${e.titleBorder.borderBottomWidth} ${e.titleBorder.borderBottomStyle} ${e.titleBorder.borderBottomColor}; ${e.titleCss}"">
                                                ${e.productTitle}
                                            </h3>
                                           <div class="quizell-product-description  " style="${e.isDescriptionItalic?'italic':'normal'}; display:${!e.isShowProductDescription?'none':'block'}; font-weight:${e.isDescriptionBold?'bold':'normal'}; text-decoration:${e.isDescriptionUnderline?'underline':'none'}; padding:${e.descriptionPadding}; font-size:${e.descriptionFontSize}px; text-align:${e.descriptionTextAlign}; color:${e.descriptionFontColor}; background-color:${e.descriptionBackgroundColor}; border-radius:${e.descriptionBorderRadius}px;  border-top: ${e.descriptionBorder.borderTopWidth} ${e.descriptionBorder.borderTopStyle} ${e.descriptionBorder.borderTopColor};
    border-left: ${e.descriptionBorder.borderLeftWidth} ${e.descriptionBorder.borderLeftStyle} ${e.descriptionBorder.borderLeftColor};
    border-right: ${e.descriptionBorder.borderRightWidth} ${e.descriptionBorder.borderRightStyle} ${e.descriptionBorder.borderRightColor};
    border-bottom: ${e.descriptionBorder.borderBottomWidth} ${e.descriptionBorder.borderBottomStyle} ${e.descriptionBorder.borderBottomColor};${e.buttonCss}"">
                                                ${e.productDescription}
                                            </div>
                                        </div>
                                        <div>
                                        <div class="w-100 mb-2  quizell-product-price" style="font-style:${e.isPriceItalic?'italic':'normal'}; display:${!e.isShowProductPrice?'none':'block'}; font-weight:${e.isPriceBold?'bold':'normal'}; text-decoration:${e.isPriceUnderline?'underline':'none'}; padding:${e.pricePadding}; font-size:${e.priceFontSize}px; text-align:${e.priceTextAlign}; color:${e.priceFontColor}; background-color:${e.priceBackgroundColor}; border-radius:${e.priceBorderRadius}px;  border-top: ${e.priceBorder.borderTopWidth} ${e.priceBorder.borderTopStyle} ${e.priceBorder.borderTopColor};
    border-left: ${e.priceBorder.borderLeftWidth} ${e.priceBorder.borderLeftStyle} ${e.priceBorder.borderLeftColor};
    border-right: ${e.priceBorder.borderRightWidth} ${e.priceBorder.borderRightStyle} ${e.priceBorder.borderRightColor};
    border-bottom: ${e.priceBorder.borderBottomWidth} ${e.priceBorder.borderBottomStyle} ${e.priceBorder.borderBottomColor};">
                                                ${e.productPrice}
                                            </div>
                                            <table class="" role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr class="">
                                            <td>
                                            <div class="centered-anchor w-100" style=" text-align:${e.buttonTextAlign};">
                                          <a  href="${e.productButtonLink.url}" target="${e.productButtonLink.target}" class="quizell-product-price-button ${e.isButtonBold?'font-weight-bold':''} display:block; ${e.isButtonItalic?'font-italic':''} " style="cursor:pointer;margin:${e.buttonTextAlign=='center'?'auto':''}; width:${e.productButtonWidth}%; display:block; text-decoration:${e.isButtonUnderline?'underline':'none'}; padding:${e.buttonPadding}; font-size:${e.buttonFontSize}px; color:${e.buttonFontColor}; background-color:${e.buttonBackgroundColor}; border-radius:${e.buttonBorderRadius}px;  border-top: ${e.buttonBorder.borderTopWidth} ${e.buttonBorder.borderTopStyle} ${e.buttonBorder.borderTopColor};
    border-left: ${e.buttonBorder.borderLeftWidth} ${e.buttonBorder.borderLeftStyle} ${e.buttonBorder.borderLeftColor};
    border-right: ${e.buttonBorder.borderRightWidth} ${e.buttonBorder.borderRightStyle} ${e.buttonBorder.borderRightColor};
    border-bottom: ${e.buttonBorder.borderBottomWidth} ${e.buttonBorder.borderBottomStyle} ${e.buttonBorder.borderBottomColor};">
                                                ${e.productButton}
                                            </a>
                                            </div>
                                            </td>
                                            </tr>

                                           </table>
                                           
                                        </div>
                                    </div>
                                </div>
                            </td>`;
                    }
                    
                    productSection += `</tr>`;
                }
                userHtml += productSection + `</table>`;

                
              
                
            return userHtml
            }
          }),
          exporters: {
              web: e =>  e => {
                let userHtml = "";
                let productSection = "";
                
                userHtml += `<table isDynamicProducts="${e.isDynamicProducts}" style=" font-family:${e.mainFontFamily.value}; ${e.mainCss}" class="hello responsive quizell-product-table" role="presentation" width="100%" cellspacing="0" cellpadding="0">`;
                
                for (let i = 0; i < +e.rows; i++) {
                    productSection += `<tr class="quizell-product-row">`;
                    
                    for (let j = 0; j < +e.columns; j++) {
                        productSection += `
                            <td class="quizell-product-cell" style="">
                                <div class="quizell-product-card" style="background-color:${e.mainBackgroundColor}; padding:${e.mainPadding}; margin:${e.mainMargin};   border-top: ${e.mainBorder.borderTopWidth} ${e.mainBorder.borderTopStyle} ${e.mainBorder.borderTopColor};
    border-left: ${e.mainBorder.borderLeftWidth} ${e.mainBorder.borderLeftStyle} ${e.mainBorder.borderLeftColor};
    border-right: ${e.mainBorder.borderRightWidth} ${e.mainBorder.borderRightStyle} ${e.mainBorder.borderRightColor};
    border-bottom: ${e.mainBorder.borderBottomWidth} ${e.mainBorder.borderBottomStyle} ${e.mainBorder.borderBottomColor}; border-radius:${e.mainBorderRadius}px; ">
                                    <!-- Your product card template goes here -->
                                    <div class="w-100">
                                        <div class="w-100">
                                            <div class="quizell-product-image w-100" style="padding:${e.imagePadding};   border-top: ${e.imageBorder.borderTopWidth} ${e.imageBorder.borderTopStyle} ${e.imageBorder.borderTopColor};
    border-left: ${e.imageBorder.borderLeftWidth} ${e.imageBorder.borderLeftStyle} ${e.imageBorder.borderLeftColor};
    border-right: ${e.imageBorder.borderRightWidth} ${e.imageBorder.borderRightStyle} ${e.imageBorder.borderRightColor};
    border-bottom: ${e.imageBorder.borderBottomWidth} ${e.imageBorder.borderBottomStyle} ${e.imageBorder.borderBottomColor}; border-radius:${e.imageBorderRadius}px; ${e.imageCss}" >
                                                <img style="width:${e.image.autoWidth?'100%':e.image.maxWidth}; overflow:hidden"  src="${e.image.url}" />
                                            </div>
                                        </div>
                                        <div class="product-card-body mt-2">
                                            <h3 class="quizell-product-title  " style="font-style:${e.isTitleItalic?'italic':'normal'}; display:${!e.isShowProductTitle?'none':'block'}; font-weight:${e.isTitleBold?'bold':'normal'}; text-decoration:${e.isTitleUnderline?'underline':'none'}; padding:${e.titlePadding}; font-size:${e.titleFontSize}px; text-align:${e.titleTextAlign}; color:${e.titleFontColor}; background-color:${e.titleBackgroundColor}; border-radius:${e.titleBorderRadius}px;  border-top: ${e.titleBorder.borderTopWidth} ${e.titleBorder.borderTopStyle} ${e.titleBorder.borderTopColor};
    border-left: ${e.titleBorder.borderLeftWidth} ${e.titleBorder.borderLeftStyle} ${e.titleBorder.borderLeftColor};
    border-right: ${e.titleBorder.borderRightWidth} ${e.titleBorder.borderRightStyle} ${e.titleBorder.borderRightColor};
    border-bottom: ${e.titleBorder.borderBottomWidth} ${e.titleBorder.borderBottomStyle} ${e.titleBorder.borderBottomColor}; ${e.titleCss}"">
                                                ${e.productTitle}
                                            </h3>
                                           <div class="quizell-product-description  " style="${e.isDescriptionItalic?'italic':'normal'}; display:${!e.isShowProductDescription?'none':'block'}; font-weight:${e.isDescriptionBold?'bold':'normal'}; text-decoration:${e.isDescriptionUnderline?'underline':'none'}; padding:${e.descriptionPadding}; font-size:${e.descriptionFontSize}px; text-align:${e.descriptionTextAlign}; color:${e.descriptionFontColor}; background-color:${e.descriptionBackgroundColor}; border-radius:${e.descriptionBorderRadius}px;  border-top: ${e.descriptionBorder.borderTopWidth} ${e.descriptionBorder.borderTopStyle} ${e.descriptionBorder.borderTopColor};
    border-left: ${e.descriptionBorder.borderLeftWidth} ${e.descriptionBorder.borderLeftStyle} ${e.descriptionBorder.borderLeftColor};
    border-right: ${e.descriptionBorder.borderRightWidth} ${e.descriptionBorder.borderRightStyle} ${e.descriptionBorder.borderRightColor};
    border-bottom: ${e.descriptionBorder.borderBottomWidth} ${e.descriptionBorder.borderBottomStyle} ${e.descriptionBorder.borderBottomColor};${e.buttonCss}"">
                                                ${e.productDescription}
                                            </div>
                                        </div>
                                        <div>
                                        <div class="w-100 mb-2  quizell-product-price" style="font-style:${e.isPriceItalic?'italic':'normal'}; display:${!e.isShowProductPrice?'none':'block'}; font-weight:${e.isPriceBold?'bold':'normal'}; text-decoration:${e.isPriceUnderline?'underline':'none'}; padding:${e.pricePadding}; font-size:${e.priceFontSize}px; text-align:${e.priceTextAlign}; color:${e.priceFontColor}; background-color:${e.priceBackgroundColor}; border-radius:${e.priceBorderRadius}px;  border-top: ${e.priceBorder.borderTopWidth} ${e.priceBorder.borderTopStyle} ${e.priceBorder.borderTopColor};
    border-left: ${e.priceBorder.borderLeftWidth} ${e.priceBorder.borderLeftStyle} ${e.priceBorder.borderLeftColor};
    border-right: ${e.priceBorder.borderRightWidth} ${e.priceBorder.borderRightStyle} ${e.priceBorder.borderRightColor};
    border-bottom: ${e.priceBorder.borderBottomWidth} ${e.priceBorder.borderBottomStyle} ${e.priceBorder.borderBottomColor};">
                                                ${e.productPrice}
                                            </div>
                                            <table class="" role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr class="">
                                            <td>
                                            <div class="centered-anchor w-100" style=" text-align:${e.buttonTextAlign};">
                                          <a  href="${e.productButtonLink.url}" target="${e.productButtonLink.target}" class="quizell-product-price-button ${e.isButtonBold?'font-weight-bold':''} display:block; ${e.isButtonItalic?'font-italic':''} " style="cursor:pointer;margin:${e.buttonTextAlign=='center'?'auto':''}; width:${e.productButtonWidth}%; display:block; text-decoration:${e.isButtonUnderline?'underline':'none'}; padding:${e.buttonPadding}; font-size:${e.buttonFontSize}px; color:${e.buttonFontColor}; background-color:${e.buttonBackgroundColor}; border-radius:${e.buttonBorderRadius}px;  border-top: ${e.buttonBorder.borderTopWidth} ${e.buttonBorder.borderTopStyle} ${e.buttonBorder.borderTopColor};
    border-left: ${e.buttonBorder.borderLeftWidth} ${e.buttonBorder.borderLeftStyle} ${e.buttonBorder.borderLeftColor};
    border-right: ${e.buttonBorder.borderRightWidth} ${e.buttonBorder.borderRightStyle} ${e.buttonBorder.borderRightColor};
    border-bottom: ${e.buttonBorder.borderBottomWidth} ${e.buttonBorder.borderBottomStyle} ${e.buttonBorder.borderBottomColor};">
                                                ${e.productButton}
                                            </a>
                                            </div>
                                            </td>
                                            </tr>

                                           </table>
                                           
                                        </div>
                                    </div>
                                </div>
                            </td>`;
                    }
                    
                    productSection += `</tr>`;
                }
                userHtml += productSection + `</table>`;

                
              
                
            return userHtml
            },
              email:  e => {
                let userHtml = "";
                let productSection = "";
                
                userHtml += `<table isDynamicProducts="${e.isDynamicProducts}" style=" font-family:${e.mainFontFamily.value}; ${e.mainCss}" class="hello responsive quizell-product-table" role="presentation" width="100%" cellspacing="0" cellpadding="0">`;
                
                for (let i = 0; i < +e.rows; i++) {
                    productSection += `<tr class="quizell-product-row">`;
                    
                    for (let j = 0; j < +e.columns; j++) {
                        productSection += `
                            <td class="quizell-product-cell" style="">
                                <div class="quizell-product-card" style="background-color:${e.mainBackgroundColor}; padding:${e.mainPadding}; margin:${e.mainMargin};   border-top: ${e.mainBorder.borderTopWidth} ${e.mainBorder.borderTopStyle} ${e.mainBorder.borderTopColor};
    border-left: ${e.mainBorder.borderLeftWidth} ${e.mainBorder.borderLeftStyle} ${e.mainBorder.borderLeftColor};
    border-right: ${e.mainBorder.borderRightWidth} ${e.mainBorder.borderRightStyle} ${e.mainBorder.borderRightColor};
    border-bottom: ${e.mainBorder.borderBottomWidth} ${e.mainBorder.borderBottomStyle} ${e.mainBorder.borderBottomColor}; border-radius:${e.mainBorderRadius}px; ">
                                    <!-- Your product card template goes here -->
                                    <div class="w-100">
                                        <div class="w-100">
                                            <div class="quizell-product-image w-100" style="padding:${e.imagePadding};   border-top: ${e.imageBorder.borderTopWidth} ${e.imageBorder.borderTopStyle} ${e.imageBorder.borderTopColor};
    border-left: ${e.imageBorder.borderLeftWidth} ${e.imageBorder.borderLeftStyle} ${e.imageBorder.borderLeftColor};
    border-right: ${e.imageBorder.borderRightWidth} ${e.imageBorder.borderRightStyle} ${e.imageBorder.borderRightColor};
    border-bottom: ${e.imageBorder.borderBottomWidth} ${e.imageBorder.borderBottomStyle} ${e.imageBorder.borderBottomColor}; border-radius:${e.imageBorderRadius}px; ${e.imageCss}" >
                                                <img style="width:${e.image.autoWidth?'100%':e.image.maxWidth}; overflow:hidden"  src="${e.image.url}" />
                                            </div>
                                        </div>
                                        <div class="product-card-body mt-2">
                                            <h3 class="quizell-product-title  " style="font-style:${e.isTitleItalic?'italic':'normal'}; display:${!e.isShowProductTitle?'none':'block'}; font-weight:${e.isTitleBold?'bold':'normal'}; text-decoration:${e.isTitleUnderline?'underline':'none'}; padding:${e.titlePadding}; font-size:${e.titleFontSize}px; text-align:${e.titleTextAlign}; color:${e.titleFontColor}; background-color:${e.titleBackgroundColor}; border-radius:${e.titleBorderRadius}px;  border-top: ${e.titleBorder.borderTopWidth} ${e.titleBorder.borderTopStyle} ${e.titleBorder.borderTopColor};
    border-left: ${e.titleBorder.borderLeftWidth} ${e.titleBorder.borderLeftStyle} ${e.titleBorder.borderLeftColor};
    border-right: ${e.titleBorder.borderRightWidth} ${e.titleBorder.borderRightStyle} ${e.titleBorder.borderRightColor};
    border-bottom: ${e.titleBorder.borderBottomWidth} ${e.titleBorder.borderBottomStyle} ${e.titleBorder.borderBottomColor}; ${e.titleCss}"">
                                                ${e.productTitle}
                                            </h3>
                                           <div class="quizell-product-description  " style="${e.isDescriptionItalic?'italic':'normal'}; display:${!e.isShowProductDescription?'none':'block'}; font-weight:${e.isDescriptionBold?'bold':'normal'}; text-decoration:${e.isDescriptionUnderline?'underline':'none'}; padding:${e.descriptionPadding}; font-size:${e.descriptionFontSize}px; text-align:${e.descriptionTextAlign}; color:${e.descriptionFontColor}; background-color:${e.descriptionBackgroundColor}; border-radius:${e.descriptionBorderRadius}px;  border-top: ${e.descriptionBorder.borderTopWidth} ${e.descriptionBorder.borderTopStyle} ${e.descriptionBorder.borderTopColor};
    border-left: ${e.descriptionBorder.borderLeftWidth} ${e.descriptionBorder.borderLeftStyle} ${e.descriptionBorder.borderLeftColor};
    border-right: ${e.descriptionBorder.borderRightWidth} ${e.descriptionBorder.borderRightStyle} ${e.descriptionBorder.borderRightColor};
    border-bottom: ${e.descriptionBorder.borderBottomWidth} ${e.descriptionBorder.borderBottomStyle} ${e.descriptionBorder.borderBottomColor};${e.buttonCss}"">
                                                ${e.productDescription}
                                            </div>
                                        </div>
                                        <div>
                                        <div class="w-100 mb-2  quizell-product-price" style="font-style:${e.isPriceItalic?'italic':'normal'}; display:${!e.isShowProductPrice?'none':'block'}; font-weight:${e.isPriceBold?'bold':'normal'}; text-decoration:${e.isPriceUnderline?'underline':'none'}; padding:${e.pricePadding}; font-size:${e.priceFontSize}px; text-align:${e.priceTextAlign}; color:${e.priceFontColor}; background-color:${e.priceBackgroundColor}; border-radius:${e.priceBorderRadius}px;  border-top: ${e.priceBorder.borderTopWidth} ${e.priceBorder.borderTopStyle} ${e.priceBorder.borderTopColor};
    border-left: ${e.priceBorder.borderLeftWidth} ${e.priceBorder.borderLeftStyle} ${e.priceBorder.borderLeftColor};
    border-right: ${e.priceBorder.borderRightWidth} ${e.priceBorder.borderRightStyle} ${e.priceBorder.borderRightColor};
    border-bottom: ${e.priceBorder.borderBottomWidth} ${e.priceBorder.borderBottomStyle} ${e.priceBorder.borderBottomColor};">
                                                ${e.productPrice}
                                            </div>
                                            <table class="" role="presentation" width="100%" cellspacing="0" cellpadding="0">
                                            <tr class="">
                                            <td>
                                            <div class="centered-anchor w-100" style=" text-align:${e.buttonTextAlign};">
                                          <a  href="${e.productButtonLink.url}" target="${e.productButtonLink.target}" class="quizell-product-price-button ${e.isButtonBold?'font-weight-bold':''} display:block; ${e.isButtonItalic?'font-italic':''} " style="cursor:pointer;margin:${e.buttonTextAlign=='center'?'auto':''}; width:${e.productButtonWidth}%; display:block; text-decoration:${e.isButtonUnderline?'underline':'none'}; padding:${e.buttonPadding}; font-size:${e.buttonFontSize}px; color:${e.buttonFontColor}; background-color:${e.buttonBackgroundColor}; border-radius:${e.buttonBorderRadius}px;  border-top: ${e.buttonBorder.borderTopWidth} ${e.buttonBorder.borderTopStyle} ${e.buttonBorder.borderTopColor};
    border-left: ${e.buttonBorder.borderLeftWidth} ${e.buttonBorder.borderLeftStyle} ${e.buttonBorder.borderLeftColor};
    border-right: ${e.buttonBorder.borderRightWidth} ${e.buttonBorder.borderRightStyle} ${e.buttonBorder.borderRightColor};
    border-bottom: ${e.buttonBorder.borderBottomWidth} ${e.buttonBorder.borderBottomStyle} ${e.buttonBorder.borderBottomColor};">
                                                ${e.productButton}
                                            </a>
                                            </div>
                                            </td>
                                            </tr>

                                           </table>
                                           
                                        </div>
                                    </div>
                                </div>
                            </td>`;
                    }
                    
                    productSection += `</tr>`;
                }
                userHtml += productSection + `</table>`;

                
              
                
            return userHtml
            }
          },
          head: {
              css: function(e) { },
              js: function(e) {}
          }
      },
      propertyStates: (values) => {
      
    },
  });
