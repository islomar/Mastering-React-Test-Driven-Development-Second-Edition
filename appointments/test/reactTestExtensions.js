import {act} from "react";
import ReactDOM from "react-dom/client";

export let container;

export const initializeReactContainer = () => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
}

export const render = (component) => act(() => ReactDOM.createRoot(container).render(component));

export const click = (element) => act(() => element.click());

/**
 * JSDOM will take a click event and internally convert it into a submit event.
 * There is no way we can get access to that submit event object if JSDOM creates it.
 * Therefore, we need to directly fire the submit event
  */
export const submit = (formElement) => {
    const event = new Event("submit", {
        /**
         * Why do we need to ensure this event bubbles?
         * Because React has its own event handling system that is triggered by events reaching the React root element.
         * The submit event must bubble up to our container element before React will process it.
         */
        bubbles: true,
        cancelable: true,
    });
    act(() => formElement.dispatchEvent(event));
    return event;
};

export const element = (selector) => document.querySelector(selector);

export const elements = (selector) => Array.from(document.querySelectorAll(selector));

export const typesOf = (elements) => elements.map((element) => element.type);

export const textOf = (elements) => elements.map((element) => element.textContent);

export const form = (id) => element("form");

export const field = (fieldName) => form().elements[fieldName];