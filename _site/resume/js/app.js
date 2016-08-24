
var IE = false;
var E = null;
var Editor = {
	start : function() {
		var elements = document.querySelectorAll('.editable');
		E = new MediumEditor(elements);

		Editor.activate();
	},
	activate : function() {
		E.setup();
	},
	deactivate : function() {
		E.destroy();
		E = null;
	}
};
var EN = {
	show : function() {
		if(!IE){
			$('#resume').children().remove();
			var t = document.querySelector("#template-en");
			var body = document.querySelector('#resume');
			body.appendChild(t.content.cloneNode(true));
		}else{
			$('#template-pt-br').hide()
			$('#template-en').show()
		}
		document.documentElement.lang = 'en';

		$('.active').removeClass();
		$('#btn-en').parent().addClass('active');
	}
};
var PT = {
	show : function() {
		if(!IE){
			$('#resume').children().remove();
			var t = document.querySelector("#template-pt-br");
			var body = document.querySelector('#resume');
			body.appendChild(t.content.cloneNode(true));
		}else{
			$('#template-en').hide()
			$('#template-pt-br').show()
		}
		document.documentElement.lang = 'pt-br';

		$('.active').removeClass();
		$('#btn-pt').parent().addClass('active');
	}
};
var PDF = {
	make : function() {
		var pdf = new jsPDF('p', 'pt', 'A4');

		$('#name_details h1 span').css('float', 'none');

		source = $('#resume')[0];

		specialElementHandlers = {
		};

		margins = {
			top : 55,
			bottom : 60,
			left : 40,
			width : 522
		};

		pdf.fromHTML(
			source,
			margins.left,
			margins.top,

			{
				'width' : margins.width,
				'elementHandlers' : specialElementHandlers
			},

			function(dispose) {
				pdf.save('curriculum.pdf');
			},

			margins
		);
	}
};
var Resume = {
	save : function() {
		$('#btn-save').click(function() {
			var view = {
				lang : document.documentElement.lang,
				resume : $('#resume').html().trim(),
				script : [{
					url : '<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>'
				}]
			};

			var template = document.getElementById('template').innerHTML;
			var output = Mustache.render(template, view);

			var zip = new JSZip();
			zip.file("index.html", output);

			var content = zip.generate({type:"blob"});
			saveAs(content, "curriculum.zip");
		});
	},
	pt : function() {
		$('#btn-pt').click(function() {
			PT.show();
		});
	},
	en : function() {
		$('#btn-en').click(function() {
			EN.show();
		});
	},
	edit : function() {
		$('#btn-edit').click(function() {
			(E) ? Editor.deactivate() : Editor.start();
		});
	},
	pdf : function() {
		$('#btn-pdf').click(function() {
			PDF.make();
		});
	}
};
$(document).ready(function() {
	if( window.navigator.userAgent == "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; .NET4.0E; .NET4.0C; .NET CLR 3.5.30729; .NET CLR 2.0.50727; .NET CLR 3.0.30729; InfoPath.3; rv:11.0) like Gecko"){
		IE = true;
	}
	EN.show();
	Resume.pt();
	Resume.en();
	Resume.edit();
	Resume.save();
	Resume.pdf();
});
