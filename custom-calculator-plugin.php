<?php
/*
Plugin Name: Custom Calculator Plugin
Description: A calculator tool with a shortcode for displaying the calculator interface.
Version: 1.0
Author: Dev Mohsan
*/
function custom_calculator_enqueue_scripts() {
    wp_enqueue_script('custom-calculator-script', plugins_url('custom-calculator.js', __FILE__), array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'custom_calculator_enqueue_scripts');
function custom_calculator_shortcode() {
    ob_start();
    ?>
    <div class="calculator">
<div class="inputs">
        <h3>Bereken je extra inkomen</h3>
	<div class="investment">
	   <label>Te investeren bedrag</label><span class="currency">€</span>
       <input type="number" name="investment" id="amount" value="150000">
	</div>
    <div class="rente">
    <label> Rente </label>
    <input type="range" name="rente" id="rente" min="1" max="5" step="1" value="1"><span class="valuebox1"></span><span class="valuebox2"></span><span class="valuebox3"></span><span class="valuebox4"></span><span class="valuebox5"></span><span class="min">Onmiddellijk</span><span class="max">Uitgesteld</span>
    </div>
	</div>
<div class="results">
    <div><h6>Jaarlijks rendement </h6><h1 style="color: #5FFFB2;"><span id="annualreturn">0</span></h1></div>
	<h6 class="small">Maandelijks:</h6>
    <div><span>Bruto inkomen </span><p>€<span id="monthlygross">0</span></p></div>
    <div><span>Netto inkomen </span><p>€<span id="monthlynetincome">0</span></p></div>
	<h6 class="small">Bij terugbetaling:</h6>
    <div><span>Bruto inkomen</span><p>€<span id="reimbursementgross">0</span></p></div>
    <div><span>Netto inkomen </span><p>€<span id="reimbursementnetincome">0</span></p></div>
	<h6 class="small">Totaal na looptijd van 5 jaar</h6>
    <div><span>Bruto inkomen</span><p>€<span id="totalgross">0</span></p></div>
    <div><span>Netto inkomen</span><p>€<span id="totalnetincome">0</span></p></div>
</div>
</div>
    <?php
    return ob_get_clean();
}
add_shortcode('custom_calculator', 'custom_calculator_shortcode');