class CJ4_FMC_MfdAdvPage {
    static ShowPage1(fmc) {
        fmc.clearDisplay();
        fmc.setTemplate([
            ["LEFT DISPLAY ADVANCE[color]blue"],
            ["", "", "ACT PLAN MAP CENTER"],
            ["<PREV WPT"],
            [""],
            ["<NEXT WPT"],
            [""],
            ["<TO WPT"],
            ["CTR WPT[color]blue"],
            ["<-----"],
            [""],
            [""],
            ["", "SIDE[color]blue"],
            ["", "L/R>"]
        ]);
        fmc.updateSideButtonActiveStatus();
    }
}
