import './base.js';
import './tabs.js';
import './dropdown.js';
import './tooltip.js';
import './sidebar.js';
import { toast, toastEl, toastClear } from './toast.js';

// Register the global window.bk.* APIs.
const bk = window.bk || (window.bk = {});
bk.toast = toast;
bk.toast.el = toastEl;
bk.toast.clear = toastClear;
