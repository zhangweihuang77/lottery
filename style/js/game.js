$(function() {
	game.start();
})

var game = {
	span: $(".wrap").find('span'),
	btn: $(".btn").find('span'),
	ary_1: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35],
	ary_2: [01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15],
	ary_a: [],
	ary_b: [],
	start: function() {
		this.clicks();
	},
	aModel: function(i, j) {
		var self = this;
		i = setInterval(function() {
			self.span.eq(j).text((Math.ceil(Math.random() * 35) - 1));
		}, 30);
	},
	bModel: function(i) {
		var self = this;
		setTimeout(function() {
			clearInterval(i + 1);
			if (i < 5) {
				self.span.eq(i).text(self.ary_a[i]);
			} else {
				self.span.eq(i).text(self.ary_b[i - 5]);
			}
		}, 1000 * (1 + i));
	},
	a: function() {
		for (var i = 0; i < 7; i++) {
			this.aModel(i + 1, i);
		}
	},
	b: function() {
		for (var i = 0; i < 7; i++) {
			this.bModel(i);
		}
	},
	chance: function(ary) {
		var random = ary[(Math.ceil(Math.random() * ary.length) - 1)]
		var num = 0;
		ary.splice($.inArray(random, ary), 1);
		return random;
	},
	sortNumber: function(a, b) {
		return a - b;
	},
	sorts: function() {
		for (var i = 0; i < 7; i++) {
			if (i < 5) {
				this.ary_a.push(this.chance(this.ary_1));
			} else {
				this.ary_b.push(this.chance(this.ary_2));
			}
		}
		this.ary_a.sort(this.sortNumber);
		this.ary_b.sort(this.sortNumber);
	},
	clicks: function() {
		var self = this;
		this.btn.click(function() {
			self.sorts();
			self.a();
			self.b();
		});
	}
}