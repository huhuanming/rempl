const __CSS__ = "@keyframes fade-in{0%{opacity:0}50%{opacity:0;backdrop-filter:blur(0) grayscale(0)}to{opacity:1}}@keyframes dot-blink{50%{opacity:1}}:host{position:fixed;z-index:10000000;inset:0;text-align:center;font:12px arial;transition:opacity .5s;background:#fffe;animation-name:fade-in;animation-duration:1s;animation-iteration-count:1;animation-direction:normal}@supports (backdrop-filter: blur(1px)){:host{background:#fff8;backdrop-filter:blur(5px) grayscale(.8)}}:host:before{content:\"Publisher connection is lost\";margin:30px 0 5px;display:inline-block;padding:4px}.dot{background-color:#5096fa;display:inline-block;vertical-align:middle;height:6px;width:6px;margin:3px;opacity:0;animation-name:dot-blink;animation-duration:.65s;animation-iteration-count:infinite;animation-direction:normal;border-radius:50%}.dot:nth-child(1){animation-delay:.1s}.dot:nth-child(2){animation-delay:.175s}.dot:nth-child(3){animation-delay:.25s}\n"; // content from ./style.css will be here';

export { __CSS__ as default };
//# sourceMappingURL=style.js.map