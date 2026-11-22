"use client";

import {
  createContext,
  type ReactNode,
  use,
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
} from "react";

import { Button } from "@/components/ui/button";
import { applyAnalyticsConsent } from "@/lib/google-analytics";

type Choice = "accepted" | "rejected";

const choiceKey = "portfolio-analytics-consent-v1";
const choiceEvent = "portfolio:analytics-consent";
let sessionChoice: Choice | undefined;

function getChoice() {
  if (sessionChoice) return sessionChoice;
  try {
    const saved = window.localStorage.getItem(choiceKey);
    return saved === "accepted" || saved === "rejected" ? saved : null;
  } catch {
    return null;
  }
}

function subscribeToChoice(onChange: () => void) {
  function onStorage(event: StorageEvent) {
    if (event.key === choiceKey || event.key === null) onChange();
  }

  window.addEventListener("storage", onStorage);
  window.addEventListener("pageshow", onChange);
  window.addEventListener(choiceEvent, onChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener("pageshow", onChange);
    window.removeEventListener(choiceEvent, onChange);
  };
}

function getServerChoice() {
  return undefined;
}

const CookiePreferencesContext = createContext<((trigger: HTMLButtonElement) => void) | null>(null);
const actionClassName =
  "h-auto min-h-9 rounded-lg px-3 py-1.5 text-center whitespace-normal motion-reduce:transition-none";

export function ManageCookiesButton() {
  const openPreferences = use(CookiePreferencesContext);

  return (
    <Button
      type="button"
      variant="link"
      aria-haspopup="dialog"
      className="h-auto min-h-9 px-0 py-0 font-normal text-muted-foreground hover:text-brand-clay motion-reduce:transition-none"
      onClick={(event) => openPreferences?.(event.currentTarget)}
    >
      Manage Cookies
    </Button>
  );
}

export function CookieConsent({
  analyticsId,
  children,
}: {
  analyticsId?: string;
  children: ReactNode;
}) {
  const choice = useSyncExternalStore(subscribeToChoice, getChoice, getServerChoice);
  const [draftEnabled, setDraftEnabled] = useState(false);
  const [madeChoice, setMadeChoice] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const bannerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const syncAnalytics = () => applyAnalyticsConsent(analyticsId, getChoice() === "accepted");

    syncAnalytics();
    return subscribeToChoice(syncAnalytics);
  }, [analyticsId]);

  useEffect(() => {
    const banner = bannerRef.current;
    if (choice !== null || !banner) return;

    function revealFocusedControl(event: FocusEvent) {
      const control = event.target;
      if (
        !(control instanceof HTMLElement) ||
        !control.matches(":focus-visible") ||
        banner?.contains(control) ||
        control.closest("dialog")
      ) return;

      const panel = banner?.getBoundingClientRect();
      const focus = control.getBoundingClientRect();
      if (panel && focus.bottom > panel.top && focus.top < panel.bottom &&
        focus.left < panel.right && focus.right > panel.left) {
        window.scrollBy({ top: focus.bottom - panel.top + 6, behavior: "instant" });
      }
    }

    document.addEventListener("focusin", revealFocusedControl);
    return () => document.removeEventListener("focusin", revealFocusedControl);
  }, [choice]);

  function saveChoice(next: Choice) {
    try {
      window.localStorage.setItem(choiceKey, next);
      sessionChoice = undefined;
    } catch {
      sessionChoice = next;
    }
    window.dispatchEvent(new Event(choiceEvent));
    setMadeChoice(true);
  }

  function openPreferences(trigger: HTMLButtonElement) {
    // Safari may leave a clicked button unfocused. Let the dialog restore this trigger.
    trigger.focus({ preventScroll: true });
    setDraftEnabled(choice === "accepted");
    dialogRef.current?.showModal();
  }

  return (
    <CookiePreferencesContext value={openPreferences}>
      {children}
      <p className="sr-only" role="status">
        {choice === null && "Choose whether to allow optional analytics cookies."}
        {choice && madeChoice &&
          `Analytics cookies ${choice === "accepted" ? "enabled" : "disabled"}${sessionChoice ? " for this page visit." : "."}`}
      </p>

      {choice === null && (
        <section
          ref={bannerRef}
          aria-labelledby="cookie-banner-title"
          className="sticky bottom-3 z-60 mx-3 mb-3 max-h-[50dvh] max-w-md overflow-auto rounded-xl border bg-background p-3 text-sm text-foreground shadow-md min-[30rem]:mx-auto sm:mr-5 sm:mb-5 sm:ml-auto sm:bottom-5 sm:p-4"
        >
          <h2 id="cookie-banner-title" className="font-bold font-editorial">
            Cookie choices
          </h2>
          <p className="mt-1 leading-relaxed text-muted-foreground">
            This website uses essential technologies to function and optional analytics
            cookies to understand how visitors use the site. You can accept or reject
            analytics cookies at any time.
          </p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            <Button
              type="button"
              variant="outline"
              className={`${actionClassName} px-2 sm:px-3`}
              onClick={() => saveChoice("accepted")}
            >
              Accept Analytics
            </Button>
            <Button
              type="button"
              variant="outline"
              className={`${actionClassName} px-2 sm:px-3`}
              onClick={() => saveChoice("rejected")}
            >
              Reject Analytics
            </Button>
          </div>
        </section>
      )}

      <dialog
        ref={dialogRef}
        aria-labelledby="cookie-dialog-title"
        className="m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-auto rounded-xl border bg-background p-4 text-foreground shadow-lg backdrop:bg-foreground/35 sm:p-6 dark:backdrop:bg-black/60"
      >
        <h2 id="cookie-dialog-title" className="text-2xl font-bold tracking-tight font-editorial">
          Cookie preferences
        </h2>
        <div className="mt-4 space-y-4 text-sm leading-relaxed">
          <section aria-labelledby="essential-cookies-title">
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 id="essential-cookies-title" className="font-semibold">Essential</h3>
              <span className="text-muted-foreground">Always on</span>
            </div>
            <p className="mt-1 text-muted-foreground">
              Browser storage remembers your cookie choice and theme. These settings
              keep your preferences as you move around the website.
            </p>
          </section>
          <div className="border-t pt-3">
            <label className="inline-flex min-h-9 cursor-pointer items-center gap-2 font-semibold">
              <input
                type="checkbox"
                checked={draftEnabled}
                aria-describedby="analytics-cookies-description"
                onChange={(event) => setDraftEnabled(event.currentTarget.checked)}
                className="size-4 accent-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              />
              Analytics
            </label>
            <p id="analytics-cookies-description" className="text-muted-foreground">
              Optional Google Analytics cookies help me understand which pages people
              visit and how they use the site.
            </p>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap justify-end gap-2.5">
          <Button
            type="button"
            variant="outline"
            className={actionClassName}
            onClick={() => dialogRef.current?.close()}
          >
            Cancel
          </Button>
          {/* Save in browser storage without triggering GA's automatic form measurement. */}
          <Button
            type="button"
            className={`${actionClassName} motion-reduce:hover:translate-y-0`}
            onClick={() => {
              saveChoice(draftEnabled ? "accepted" : "rejected");
              dialogRef.current?.close();
            }}
          >
            Save preferences
          </Button>
        </div>
      </dialog>
    </CookiePreferencesContext>
  );
}
