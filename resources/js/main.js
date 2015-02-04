$.ajax({
    url: "genetic.svg",
    dataType: "xml",
    success: function(data) {
        /*console.log(data.find('svg'));*/
        
        var layerOptions = {'title':'SVG-Ebenen','code': data.children[0],'background':true,'colorSample':'#ff0000'};
    	var tmp = facs.addLayer(layerOptions);
    	
    	$('path').attr('fill','#eee3ce').attr('opacity','0.95');
    	
    	$('.leaflet-control-layers-overlays span').html('SVG anzeigen')
    	$('.leaflet-control-layers-overlays input').on('change',function(e){
    	    $('svg').toggle();
    	})
    	
        addListeners();
    }
});



function addListeners() {
    $('path').on('click',function(e) {
        var path = e.currentTarget;
        $('svg').append($(path).attr('fill',activeColor).attr('opacity','0.8'));
        $('#idBox').html('#' + path.id);
    });
    
    $('body').keydown(function(e) {
        if(e.which == 32) {
            e.preventDefault();
            $('.leaflet-control-layers-overlays input').click();
        }
    });
    
};

function initiateColoring() {
    $('header nav li').each(function(index) {
        var li = $(this);
        $(li).css('backgroundColor',colors[index]);
        
        $(this).on('click',function() {
            $('li.activeColor').removeClass('activeColor');
            $(li).addClass('activeColor');
            
            activeColor = colors[index];
            console.log('activeColor is ' + activeColor);
        });
        
    });
};



var facs = L.facsimileViewer('content');
var colors = ['#eee3ce','#92908c','#623504','#26d6fc','#f4531b','#1b44f4','#859900','#d825da'];
var activeColor = '#eee3ce';

initiateColoring();



facs.loadImage({
    url: './image/',
    width: 8448,
    height: 6192,
    //dpi: 600,
    /*attribution: 'L. v. Beethoven: ' + meiFile.workRef + ', <a href="http://www.beethoven-haus-bonn.de/sixcms/detail.php?id=&template=opac_bibliothek_de&_opac=hans_de.pl&_dokid=wm33" target="_blank" alt="Description of the Manuscript at the Beethoven-Haus Bonn" title="Description of the Manuscript at the Beethoven-Haus Bonn">Autograph (BH 71)</a>, p.' + page.n,*/
    attribution: 'Genetic Sandbox',
    overlays: []
},[],1);
    
    
    
    	        