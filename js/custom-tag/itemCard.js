$(document).ready(() => {

    class ItemCard extends HTMLElement {
        static tag = 'item-card';
        constructor() {
            super();

            const self = this;
            let m_jsonData;

            $.getJSON(this.getAttribute('json'))
                .done(function(jsonData) {
                    m_jsonData = jsonData;

                    self.innerHTML = m_jsonData.name;

                    $(self).css({
                        color: m_jsonData.color
                    });
                }).fail(() => {
                    console.log(ItemCard.tag + " failed");
                });

        }
    }

    customElements.define(ItemCard.tag, ItemCard);

});