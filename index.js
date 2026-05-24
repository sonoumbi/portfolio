import van from "https://cdn.jsdelivr.net/gh/vanjs-org/van/public/van-1.6.0.min.js"

const { div, button,img,a,span } = van.tags;

const main = document.querySelector(".main");
const space2 = document.querySelector("#space2")

const projectImage = (isToggled,link, imageLink) => {
    return a(
            {href: link, class : () => isToggled.val? "view" : "hide" },
            img(
                {
                    src:imageLink,
                    class : "projectImage"

                }
            ))
}

const aboutMeDescription = (isToggled) => {
    return div(
            {style: "line-height: 0.95em;", class : () => isToggled.val? "view description" : "hide" },
            "Sono Umberto Zucchetti, sono nato a Brescia e mi appassiona il mondo del design. Dopo anni di scuola improntata all'ambito scientifico, ho iniziato ad interessarmi al mondo grafico, per poi passare al design del prodotto, tanto da iscrivermi al politecnico di Torino (starei studiando ingegneria informatica altrimenti). La mia passione è osservare ciò che mi circonda, e ogni giorno può nascere potenzialmente una mia nuova passione. Il mio sogno è di poter progettare liberamente, seguendo ciò che sento e comprendo del mondo."
            )
}

const aboutMeImage = (isToggled, imageLink) => {
    return a(
            {style: "align-self: center;", class : () => isToggled.val? "view" : "hide"},
            img(
                {
                    src:imageLink,
                    class : "aboutMeImage"

                }
            ))
}

const projectArrow = (isToggled) => {
    return img(
        {src:"./svg/stat_minus_1_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg",
         class : () => isToggled.val? "arrow_up" : "arrow_down" 
        },
    )
}

const progetti = (menu_title) => {
    const isToggled = van.state(false);
    return div(
        {onclick : () => isToggled.val = !isToggled.val, class : "link"},
        div(
            {class : "title_link"},
            projectArrow(isToggled),
            button({class : () => isToggled.val? "selected" : "none" }, "Progetti")
        ),
        projectImage(isToggled,"./projects/tickettreat/tickettreat.html", "./img/ticketreat.png"),
        projectImage(isToggled,"./projects/nokia/nokia.html", "./img/nokia.png"),
        projectImage(isToggled,"./projects/mina/mina.html", "./img/mina.png"),
    )
}

const aboutme = (menu_title) => {
    const isToggled = van.state(false);
    return div(
        {class : "link"},
        div(
            {onclick : () => isToggled.val = !isToggled.val,class : "title_link"},
            projectArrow(isToggled),
            button({class : () => isToggled.val? "selected" : "none" }, "About me")
        ),
        aboutMeImage(isToggled, "./img/foto_about_me.jpeg"),
        aboutMeDescription(isToggled)
    )
}

main.insertBefore(progetti(), space2)
main.insertBefore(aboutme(), space2)