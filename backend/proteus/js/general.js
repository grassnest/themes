/*  ==========================================================================
    Table of Content:

	- runBtnBlur
	- runScrollTop

    ========================================================================== */

/*  ==========================================================================
    Functions
    ========================================================================== */

/*
    runBtnBlur
    ========================================================================== */
function runBtnBlur(morrisChart){

    $(".btn").mouseup(function(e){
        e.preventDefault();
        $(this).blur();
    });

}

/*
    runScrollTop
    ========================================================================== */

function setScrollTop(){
    $.scrollUp({
        animation: 'fade',
        activeOverlay: '#00FFFF',
        scrollText: '<i class="fa fa-chevron-up"></i>'
    });
}


/*  ==========================================================================
    Function Calls
   	========================================================================== */

$(function(){

	   	// Variables

		// === Checkers ===

		// === Setters ===

		// === Executions ===
        runBtnBlur();
        setScrollTop();
});
