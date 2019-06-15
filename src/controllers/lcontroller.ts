import express from "express";

export const home = async (req, res: express.Response, next) => {
    await res.render("index", { title: "Landing Page" });
};

