import { Router } from "express";
import Logger from "./Logger";

export interface Settings {
    version: string;
    env: string;
    baseUrl: string;
    userAgent: string;
}

export interface APIOptions {
    settings: Settings,
    logger: Logger
}

export interface Controller {
    router: Router;
    settings: Settings;
}

export interface ConstructionData {
    time: string;
    ships: string[];
}

export interface Names {
    en: string | null;
    cn: string | null;
    jp: string | null;
    kr: string | null;
}

export interface Skin {
    title: string | null;
    image: string | null;
}
