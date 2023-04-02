// Copyright 2022 ROC. All rights reserved.
// Use of this source code is governed by a MIT style
// license that can be found in the LICENSE file.

package broker

import (
	"github.com/rocboss/paopao-ce/internal/core"

	"github.com/gin-gonic/gin"
	"github.com/rocboss/paopao-ce/pkg/errcode"
)

type RechargeReq struct {
	Amount int64 `json:"amount" form:"amount" binding:"required"`
}

func GetRechargeByID(id int64) (*core.WalletRecharge, error) {
	return ds.GetRechargeByID(id)
}

func CreateRecharge(userID, amount int64) (*core.WalletRecharge, error) {
	return ds.CreateRecharge(userID, amount)
}

func FinishRecharge(ctx *gin.Context, id int64, tradeNo string) error {
	if err := _redis.SetRechargeStatus(ctx, tradeNo); err == nil {
		recharge, err := ds.GetRechargeByID(id)
		if err != nil {
			return err
		}

		if recharge.TradeStatus != "TRADE_SUCCESS" {

			// 标记为已付款
			err := ds.HandleRechargeSuccess(recharge, tradeNo)
			defer _redis.DelRechargeStatus(ctx, tradeNo)

			if err != nil {
				return err
			}
		}

	}

	return nil
}

func BuyPostAttachment(post *core.Post, user *core.User) error {
	if user.Balance < post.AttachmentPrice {
		return errcode.InsuffientDownloadMoney
	}

	// 执行购买
	return ds.HandlePostAttachmentBought(post, user)
}
