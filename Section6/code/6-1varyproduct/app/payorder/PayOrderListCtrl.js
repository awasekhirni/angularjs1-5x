//payorder list controller using IIFE


(function(){
		"use strict";
			angular
				.module("payOrderMgmt")
				.controller("PayOrderListCtrl",PayOrderListCtrl);

			function PayOrderListCtrl(){
				var po = this;
				po.paymentOrders = [{
		    "amount": "555",
		    "beneficiaryModel": "HR99",
		    "channel": "MOBILE_BANK",
		    "currencyCode": "USD",
		    "executionDate": "2015-11-02T15:56:37.000+0300",
		    "id": "136",
		    "itemNumber": 10,
		    "status": "ACCEPTED",
		    "type": "OWN_ACCOUNTS"
				}, {
		    "amount": "121.8",
		    "beneficiaryModel": "HR01",
		    "channel": "MOBILE_BANK",
		    "currencyCode": "HRK",
		    "executionDate": "2015-10-27T00:00:00.000+0300",
		    "id": "80",
		    "itemNumber": 11,
		    "status": "ACCEPTED",
		    "type": "DOMESTIC"
				}, {
		    "amount": "121.8",
		    "beneficiaryModel": "HR01",
		    "channel": "MOBILE_BANK",
		    "currencyCode": "HRK",
		    "executionDate": "2015-10-27T00:00:00.000+0300",
		    "id": "79",
		    "itemNumber": 12,
		    "status": "ACCEPTED",
		    "type": "DOMESTIC"
					}, {
		    "amount": "121.8",
		    "beneficiaryModel": "HR01",
		    "channel": "MOBILE_BANK",
		    "currencyCode": "HRK",
		    "executionDate": "2015-10-27T00:00:00.000+0300",
		    "id": "78",
		    "itemNumber": 13,
		    "status": "ACCEPTED",
		    "type": "DOMESTIC"
				}]
			}

}());
