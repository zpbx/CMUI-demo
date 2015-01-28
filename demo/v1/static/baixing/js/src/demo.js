void function () {
	'use strict'

	var demo = {
		init: function () {
			this._getPageId()
			this._initPage()
		},
		_getPageId: function () {
			this.pageId = _.dom.$body.attr('id') || '__unknown__'
		},
		_initPage: function () {
			var pageModule = this[this.pageId]
			if (pageModule && _.isFunction(pageModule.init)) {
				pageModule.init()
			}
		}
	}

	demo.mask = {
		init: function () {
			this._setAction()
		},
		_setAction: function () {
			_.action.add({
				'mask-show': function () {
					return CMUI.mask.show()
				},
				'mask-hide': function () {
					return CMUI.mask.hide()
				},
				'mask-fade-in': function () {
					return CMUI.mask.fadeIn()
				},
				'mask-fade-out': function () {
					return CMUI.mask.fadeOut()
				}
			})
		}
	}

	demo.loading = {
		init: function () {
			this._setAction()
		},
		_setAction: function () {
			_.action.add({
				'loading-show': function () {
					return CMUI.loading.show()
				},
				'loading-hide': function () {
					return CMUI.loading.hide()
				},
				'loading-fade-in': function () {
					return CMUI.loading.fadeIn()
				},
				'loading-fade-out': function () {
					return CMUI.loading.fadeOut()
				},
				//text
				'loading-show-with-text': function () {
					return CMUI.loading.show('测试文字')
				},
				'loading-update-text': function () {
					return CMUI.loading.updateText('测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字测试文字')
				},
				'loading-clear-text': function () {
					return CMUI.loading.updateText()
				}
			})
		}
	}

	//exports
	window.demo = demo

	//init
	demo.init()
}()
