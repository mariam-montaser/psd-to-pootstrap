/*global $*/
$(function () {
    
    'use strict';
    
    $(window).scroll(function () {
        
        var navbar = $('.navbar');
        
        if ($(window).scrollTop() >= navbar.height()) {
            
            navbar.addClass('scrolled');
            
        } else {
            
            navbar.removeClass('scrolled');
            
        }
        
    });
    
    //deal with tabs
    
    $('.tab li').click(function () {
        
        //select tabs
        
        $(this).addClass('select').siblings().removeClass('select');
        
        //hide all content
        
        $('.tabs-content > div').hide();
        
        //show the chosen content
        
        $('.' + $(this).data('class')).show();
        
    });
    
});