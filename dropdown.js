class FdsDropdown extends HTMLElement {
  constructor() {
      super();
      this.name = 'Item';
      this.type = '1';
      this.icon = 'https://img.icons8.com/small/256/like.png';
      this.bg = '#ccc';
      this.bgdrop = '#fff';
      this.color = '#010101';
  }

  static get observedAttributes() {return ['name','type','icon','bg','bgdrop','color'];}

  attributeChangedCallback(property, oldValue, newValue) {
      if (oldValue === newValue) return;
      this[ property ] = newValue;        
  }

  connectedCallback() {        
     
    const shadow = this.attachShadow({ mode: "closed" });
    let content =  this.innerHTML;
    shadow.innerHTML = `
      <style>
        :host {
          --colortxt:${this.color};
          --colorbg:${this.bg};
          --colordropbg:${this.bg};
          --colordroptxt:${this.color};
          --hover:#7b7979;
          --hovertxt:#000;
        }
        .drop-new {position: relative;background: ${this.bg};}
        .drop-new > a {width: auto;height: auto;padding: .3rem;text-decoration: none;display: flex;align-items: center;justify-content: center;color: ${this.color};}          
        .img-li {width: 20px;margin-right: .3rem;}
        .drop-new ul {font-size: 15px;list-style-type: none;}								
        .drop-new .drop {display: none;}
        .drop::before {content: '';width: 0;height: 0;border-left: 5px solid transparent;border-right: 5px solid transparent;border-bottom: 5px solid ${this.bgdrop};clear: both;          z-index: 0;position: absolute;right: 2px;top: -5px;}
        .drop-new:hover {cursor: pointer;}
        .drop-new:hover .drop {border-radius: 4px;background: ${this.bgdrop};margin-top: 0px;right: 6px;position: absolute;padding: .5rem;padding-top: 0rem;display: flex;align-items: center;justify-content: center;box-shadow: 0 4px 8px rgba(0,0,0,.1);flex-direction: column;min-width: 120px;padding-bottom: 0rem;}	
        .drop * {padding: .5rem .5rem;border-bottom: 1px solid #ccc;width: 100%;font-size: 12px;display: flex;align-items: center;justify-content: flex-start;transition: ease all 280ms;}
        .drop *:hover {transition: ease all 280ms;color: var(--hovertxt)!important;background: var(--hover);}
        .drop-new:hover .drop *:first-of-type:hover {border-top-left-radius: 4px;border-top-right-radius: 4px;}
        .drop-new:hover .drop *:last-of-type:hover {border-bottom-left-radius: 4px;border-bottom-right-radius: 4px;}        
        .drop-new:hover .drop *:last-of-type {border-bottom: 0px;}
        .drop-new:hover .drop * {text-decoration: none;color: ${this.color};}
        .drop .dropTitle {color: ${this.color};font-size: 13px;}
      </style>
      
      <div class="drop-new">        
        <a href="#">
          ${this.type == 2 || this.type == 3 ? '<img src="'+this.icon+'" class="img-li" alt="'+this.name+'" />' : ''}
          ${this.type == 1 || this.type == 2 ? this.name : ''}
        </a>        
        ${content ? '<div class="drop">'+content+'</div>' : ''} 
      </div>`;
             
  }
}
customElements.define('fds-dropdown', FdsDropdown);  
  