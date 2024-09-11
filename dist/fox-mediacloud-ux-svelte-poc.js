
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
System.register([], (function (exports) {
	'use strict';
	return {
		execute: (function () {

			function getDefaultExportFromCjs (x) {
				return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
			}

			var singleSpaSvelte$1 = {};

			(function (exports) {

			Object.defineProperty(exports, "__esModule", {
			  value: true
			});
			exports["default"] = singleSpaSvelte;

			function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

			function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

			function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

			function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

			var defaultOpts = {
			  // required opts
			  component: null,
			  // optional opts
			  domElementGetter: null,
			  props: {}
			};

			function singleSpaSvelte(userOpts) {
			  if (_typeof(userOpts) !== "object") {
			    throw new Error("single-spa-svelte requires a configuration object");
			  }

			  var opts = _objectSpread(_objectSpread({}, defaultOpts), userOpts);

			  if (!opts.component) {
			    throw new Error("single-spa-svelte must be passed opts.component");
			  } // Just a shared object to store the mounted object state


			  var mountedInstances = {};
			  return {
			    bootstrap: bootstrap.bind(null, opts, mountedInstances),
			    mount: mount.bind(null, opts, mountedInstances),
			    unmount: unmount.bind(null, opts, mountedInstances),
			    update: update.bind(null, opts, mountedInstances)
			  };
			}

			function bootstrap(opts) {
			  return Promise.resolve();
			}

			function mount(opts, mountedInstances, singleSpaProps) {
			  var defaultOptKeys = Object.keys(defaultOpts);
			  var svelteOpts = Object.keys(opts).reduce(function (object, key) {
			    if (!defaultOptKeys.includes(key)) {
			      object[key] = opts[key];
			    }

			    return object;
			  }, {});
			  return Promise.resolve().then(function () {
			    var domElementGetter = chooseDomElementGetter(opts, singleSpaProps);
			    var domElement = domElementGetter(); // See https://svelte.dev/docs#Creating_a_component

			    mountedInstances.instance = new opts.component(_objectSpread(_objectSpread({}, svelteOpts), {}, {
			      target: domElement,
			      props: Object.assign({}, singleSpaProps, opts.props)
			    }));
			  });
			}

			function unmount(opts, mountedInstances) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$destroy ? mountedInstances.instance.$destroy() : mountedInstances.instance.destroy();
			  });
			}

			function update(opts, mountedInstances, props) {
			  return Promise.resolve().then(function () {
			    mountedInstances.instance.$set ? mountedInstances.instance.$set(props) : mountedInstances.instance.set(props);
			  });
			}

			function chooseDomElementGetter(opts, props) {
			  props = props && props.customProps ? props.customProps : props;

			  if (props.domElement) {
			    return function () {
			      return props.domElement;
			    };
			  } else if (props.domElementGetter) {
			    return function () {
			      return props.domElementGetter(props);
			    };
			  } else if (opts.domElementGetter) {
			    return function () {
			      return opts.domElementGetter(props);
			    };
			  } else {
			    return defaultDomElementGetter(props);
			  }
			}

			function defaultDomElementGetter(props) {
			  var appName = props.appName || props.name;

			  if (!appName) {
			    throw Error("single-spa-svelte was not given an application name as a prop, so it can't make a unique dom element container for the svelte application");
			  }

			  var htmlId = "single-spa-application:".concat(appName);
			  return function defaultDomEl() {
			    var domElement = document.getElementById(htmlId);

			    if (!domElement) {
			      domElement = document.createElement("div");
			      domElement.id = htmlId;
			      document.body.appendChild(domElement);
			    }

			    return domElement;
			  };
			}


			}(singleSpaSvelte$1));

			var singleSpaSvelte = /*@__PURE__*/getDefaultExportFromCjs(singleSpaSvelte$1);

			function noop() { }
			function run(fn) {
			    return fn();
			}
			function blank_object() {
			    return Object.create(null);
			}
			function run_all(fns) {
			    fns.forEach(run);
			}
			function is_function(thing) {
			    return typeof thing === 'function';
			}
			function safe_not_equal(a, b) {
			    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
			}
			let src_url_equal_anchor;
			function src_url_equal(element_src, url) {
			    if (!src_url_equal_anchor) {
			        src_url_equal_anchor = document.createElement('a');
			    }
			    src_url_equal_anchor.href = url;
			    return element_src === src_url_equal_anchor.href;
			}
			function is_empty(obj) {
			    return Object.keys(obj).length === 0;
			}
			function append(target, node) {
			    target.appendChild(node);
			}
			function append_styles(target, style_sheet_id, styles) {
			    const append_styles_to = get_root_for_style(target);
			    if (!append_styles_to.getElementById(style_sheet_id)) {
			        const style = element('style');
			        style.id = style_sheet_id;
			        style.textContent = styles;
			        append_stylesheet(append_styles_to, style);
			    }
			}
			function get_root_for_style(node) {
			    if (!node)
			        return document;
			    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
			    if (root && root.host) {
			        return root;
			    }
			    return node.ownerDocument;
			}
			function append_stylesheet(node, style) {
			    append(node.head || node, style);
			    return style.sheet;
			}
			function insert(target, node, anchor) {
			    target.insertBefore(node, anchor || null);
			}
			function detach(node) {
			    if (node.parentNode) {
			        node.parentNode.removeChild(node);
			    }
			}
			function element(name) {
			    return document.createElement(name);
			}
			function text(data) {
			    return document.createTextNode(data);
			}
			function space() {
			    return text(' ');
			}
			function attr(node, attribute, value) {
			    if (value == null)
			        node.removeAttribute(attribute);
			    else if (node.getAttribute(attribute) !== value)
			        node.setAttribute(attribute, value);
			}
			function set_custom_element_data(node, prop, value) {
			    if (prop in node) {
			        node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
			    }
			    else {
			        attr(node, prop, value);
			    }
			}
			function children(element) {
			    return Array.from(element.childNodes);
			}

			let current_component;
			function set_current_component(component) {
			    current_component = component;
			}

			const dirty_components = [];
			const binding_callbacks = [];
			let render_callbacks = [];
			const flush_callbacks = [];
			const resolved_promise = /* @__PURE__ */ Promise.resolve();
			let update_scheduled = false;
			function schedule_update() {
			    if (!update_scheduled) {
			        update_scheduled = true;
			        resolved_promise.then(flush);
			    }
			}
			function add_render_callback(fn) {
			    render_callbacks.push(fn);
			}
			// flush() calls callbacks in this order:
			// 1. All beforeUpdate callbacks, in order: parents before children
			// 2. All bind:this callbacks, in reverse order: children before parents.
			// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
			//    for afterUpdates called during the initial onMount, which are called in
			//    reverse order: children before parents.
			// Since callbacks might update component values, which could trigger another
			// call to flush(), the following steps guard against this:
			// 1. During beforeUpdate, any updated components will be added to the
			//    dirty_components array and will cause a reentrant call to flush(). Because
			//    the flush index is kept outside the function, the reentrant call will pick
			//    up where the earlier call left off and go through all dirty components. The
			//    current_component value is saved and restored so that the reentrant call will
			//    not interfere with the "parent" flush() call.
			// 2. bind:this callbacks cannot trigger new flush() calls.
			// 3. During afterUpdate, any updated components will NOT have their afterUpdate
			//    callback called a second time; the seen_callbacks set, outside the flush()
			//    function, guarantees this behavior.
			const seen_callbacks = new Set();
			let flushidx = 0; // Do *not* move this inside the flush() function
			function flush() {
			    // Do not reenter flush while dirty components are updated, as this can
			    // result in an infinite loop. Instead, let the inner flush handle it.
			    // Reentrancy is ok afterwards for bindings etc.
			    if (flushidx !== 0) {
			        return;
			    }
			    const saved_component = current_component;
			    do {
			        // first, call beforeUpdate functions
			        // and update components
			        try {
			            while (flushidx < dirty_components.length) {
			                const component = dirty_components[flushidx];
			                flushidx++;
			                set_current_component(component);
			                update(component.$$);
			            }
			        }
			        catch (e) {
			            // reset dirty state to not end up in a deadlocked state and then rethrow
			            dirty_components.length = 0;
			            flushidx = 0;
			            throw e;
			        }
			        set_current_component(null);
			        dirty_components.length = 0;
			        flushidx = 0;
			        while (binding_callbacks.length)
			            binding_callbacks.pop()();
			        // then, once components are updated, call
			        // afterUpdate functions. This may cause
			        // subsequent updates...
			        for (let i = 0; i < render_callbacks.length; i += 1) {
			            const callback = render_callbacks[i];
			            if (!seen_callbacks.has(callback)) {
			                // ...so guard against infinite loops
			                seen_callbacks.add(callback);
			                callback();
			            }
			        }
			        render_callbacks.length = 0;
			    } while (dirty_components.length);
			    while (flush_callbacks.length) {
			        flush_callbacks.pop()();
			    }
			    update_scheduled = false;
			    seen_callbacks.clear();
			    set_current_component(saved_component);
			}
			function update($$) {
			    if ($$.fragment !== null) {
			        $$.update();
			        run_all($$.before_update);
			        const dirty = $$.dirty;
			        $$.dirty = [-1];
			        $$.fragment && $$.fragment.p($$.ctx, dirty);
			        $$.after_update.forEach(add_render_callback);
			    }
			}
			/**
			 * Useful for example to execute remaining `afterUpdate` callbacks before executing `destroy`.
			 */
			function flush_render_callbacks(fns) {
			    const filtered = [];
			    const targets = [];
			    render_callbacks.forEach((c) => fns.indexOf(c) === -1 ? filtered.push(c) : targets.push(c));
			    targets.forEach((c) => c());
			    render_callbacks = filtered;
			}
			const outroing = new Set();
			function transition_in(block, local) {
			    if (block && block.i) {
			        outroing.delete(block);
			        block.i(local);
			    }
			}
			function mount_component(component, target, anchor, customElement) {
			    const { fragment, after_update } = component.$$;
			    fragment && fragment.m(target, anchor);
			    if (!customElement) {
			        // onMount happens before the initial afterUpdate
			        add_render_callback(() => {
			            const new_on_destroy = component.$$.on_mount.map(run).filter(is_function);
			            // if the component was destroyed immediately
			            // it will update the `$$.on_destroy` reference to `null`.
			            // the destructured on_destroy may still reference to the old array
			            if (component.$$.on_destroy) {
			                component.$$.on_destroy.push(...new_on_destroy);
			            }
			            else {
			                // Edge case - component was destroyed immediately,
			                // most likely as a result of a binding initialising
			                run_all(new_on_destroy);
			            }
			            component.$$.on_mount = [];
			        });
			    }
			    after_update.forEach(add_render_callback);
			}
			function destroy_component(component, detaching) {
			    const $$ = component.$$;
			    if ($$.fragment !== null) {
			        flush_render_callbacks($$.after_update);
			        run_all($$.on_destroy);
			        $$.fragment && $$.fragment.d(detaching);
			        // TODO null out other refs, including component.$$ (but need to
			        // preserve final state?)
			        $$.on_destroy = $$.fragment = null;
			        $$.ctx = [];
			    }
			}
			function make_dirty(component, i) {
			    if (component.$$.dirty[0] === -1) {
			        dirty_components.push(component);
			        schedule_update();
			        component.$$.dirty.fill(0);
			    }
			    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
			}
			function init(component, options, instance, create_fragment, not_equal, props, append_styles, dirty = [-1]) {
			    const parent_component = current_component;
			    set_current_component(component);
			    const $$ = component.$$ = {
			        fragment: null,
			        ctx: [],
			        // state
			        props,
			        update: noop,
			        not_equal,
			        bound: blank_object(),
			        // lifecycle
			        on_mount: [],
			        on_destroy: [],
			        on_disconnect: [],
			        before_update: [],
			        after_update: [],
			        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
			        // everything else
			        callbacks: blank_object(),
			        dirty,
			        skip_bound: false,
			        root: options.target || parent_component.$$.root
			    };
			    append_styles && append_styles($$.root);
			    let ready = false;
			    $$.ctx = instance
			        ? instance(component, options.props || {}, (i, ret, ...rest) => {
			            const value = rest.length ? rest[0] : ret;
			            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
			                if (!$$.skip_bound && $$.bound[i])
			                    $$.bound[i](value);
			                if (ready)
			                    make_dirty(component, i);
			            }
			            return ret;
			        })
			        : [];
			    $$.update();
			    ready = true;
			    run_all($$.before_update);
			    // `false` as a special case of no DOM component
			    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
			    if (options.target) {
			        if (options.hydrate) {
			            const nodes = children(options.target);
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.l(nodes);
			            nodes.forEach(detach);
			        }
			        else {
			            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			            $$.fragment && $$.fragment.c();
			        }
			        if (options.intro)
			            transition_in(component.$$.fragment);
			        mount_component(component, options.target, options.anchor, options.customElement);
			        flush();
			    }
			    set_current_component(parent_component);
			}
			/**
			 * Base class for Svelte components. Used when dev=false.
			 */
			class SvelteComponent {
			    $destroy() {
			        destroy_component(this, 1);
			        this.$destroy = noop;
			    }
			    $on(type, callback) {
			        if (!is_function(callback)) {
			            return noop;
			        }
			        const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
			        callbacks.push(callback);
			        return () => {
			            const index = callbacks.indexOf(callback);
			            if (index !== -1)
			                callbacks.splice(index, 1);
			        };
			    }
			    $set($$props) {
			        if (this.$$set && !is_empty($$props)) {
			            this.$$.skip_bound = true;
			            this.$$set($$props);
			            this.$$.skip_bound = false;
			        }
			    }
			}

			/* src\App.svelte generated by Svelte v3.59.2 */

			function add_css(target) {
				append_styles(target, "svelte-n4mdad", "img.svelte-n4mdad{display:block;margin-left:auto;margin-right:auto}");
			}

			function create_fragment(ctx) {
				let img;
				let img_src_value;
				let t0;
				let h1;
				let t2;
				let react_button;

				return {
					c() {
						img = element("img");
						t0 = space();
						h1 = element("h1");
						h1.textContent = "You are on the svelte front end!";
						t2 = space();
						react_button = element("react-button");
						if (!src_url_equal(img.src, img_src_value = "https://static-00.iconduck.com/assets.00/svelte-icon-426x512-cm99sfkq.png")) attr(img, "src", img_src_value);
						attr(img, "alt", "svelte-icon");
						attr(img, "height", "200px");
						attr(img, "class", "svelte-n4mdad");
						set_custom_element_data(react_button, "text", "react button!");
						set_custom_element_data(react_button, "onclick", /*func*/ ctx[0]);
					},
					m(target, anchor) {
						insert(target, img, anchor);
						insert(target, t0, anchor);
						insert(target, h1, anchor);
						insert(target, t2, anchor);
						insert(target, react_button, anchor);
					},
					p: noop,
					i: noop,
					o: noop,
					d(detaching) {
						if (detaching) detach(img);
						if (detaching) detach(t0);
						if (detaching) detach(h1);
						if (detaching) detach(t2);
						if (detaching) detach(react_button);
					}
				};
			}

			function instance($$self) {
				const func = () => alert('yay');
				return [func];
			}

			class App extends SvelteComponent {
				constructor(options) {
					super();
					init(this, options, instance, create_fragment, safe_not_equal, {}, add_css);
				}
			}

			const svelteLifecycles = singleSpaSvelte({
			  component: App,
			});

			const { bootstrap, mount, unmount } = svelteLifecycles; exports({ bootstrap: bootstrap, mount: mount, unmount: unmount });

		})
	};
}));
//# sourceMappingURL=fox-mediacloud-ux-svelte-poc.js.map
