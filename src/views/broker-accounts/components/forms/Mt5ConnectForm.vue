<template>
  <a-form layout="vertical" class="broker-form">
    <a-form-item :label="$t('brokerAccounts.accountName')">
      <a-input v-model="form.name" :max-length="100" :disabled="disabled" :placeholder="$t('brokerAccounts.accountNameHint')" />
    </a-form-item>
    <a-row :gutter="12">
      <a-col :xs="24" :md="16">
        <a-form-item :label="$t('brokerAccounts.mt5.host')">
          <a-input v-model="form.host" :disabled="disabled" placeholder="mt5" autocomplete="off" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :md="8">
        <a-form-item :label="$t('brokerAccounts.mt5.port')">
          <a-input-number v-model="form.port" :min="1" :max="65535" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :xs="24" :md="8">
        <a-form-item :label="$t('brokerAccounts.mt5.symbolSuffix')" :extra="$t('brokerAccounts.mt5.symbolSuffixHint')">
          <a-input v-model="form.symbolSuffix" :disabled="disabled" placeholder="" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :md="16">
        <a-form-item :label="$t('brokerAccounts.mt5.allowedSymbols')">
          <a-input v-model="form.allowedSymbols" :disabled="disabled" placeholder="XAUUSD" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :xs="12" :md="6">
        <a-form-item :label="$t('brokerAccounts.mt5.fixedLot')">
          <a-input-number v-model="form.fixedLot" :min="0.01" :step="0.01" :precision="2" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xs="12" :md="6">
        <a-form-item :label="$t('brokerAccounts.mt5.maxLot')">
          <a-input-number v-model="form.maxLot" :min="0.01" :step="0.01" :precision="2" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xs="12" :md="6">
        <a-form-item :label="$t('brokerAccounts.mt5.maxPositions')">
          <a-input-number v-model="form.maxPositions" :min="1" :max="100" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xs="12" :md="6">
        <a-form-item :label="$t('brokerAccounts.mt5.maxDailyLoss')">
          <a-input-number v-model="form.maxDailyLoss" :min="0" :step="5" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
    </a-row>
    <a-row :gutter="12">
      <a-col :xs="12" :md="8">
        <a-form-item :label="$t('brokerAccounts.mt5.defaultSlPoints')">
          <a-input-number v-model="form.defaultSlPoints" :min="0" :step="100" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xs="12" :md="8">
        <a-form-item :label="$t('brokerAccounts.mt5.defaultTpPoints')">
          <a-input-number v-model="form.defaultTpPoints" :min="0" :step="100" :disabled="disabled" style="width: 100%" />
        </a-form-item>
      </a-col>
      <a-col :xs="24" :md="8">
        <a-form-item :label="$t('brokerAccounts.mt5.lotMode')">
          <a-select v-model="form.lotMode" :disabled="disabled">
            <a-select-option value="fixed">{{ $t('brokerAccounts.mt5.lotModeFixed') }}</a-select-option>
            <a-select-option value="proportional">{{ $t('brokerAccounts.mt5.lotModeProportional') }}</a-select-option>
          </a-select>
        </a-form-item>
      </a-col>
    </a-row>
    <a-alert type="info" show-icon :message="$t('brokerAccounts.mt5.demoOnlyHint')" style="margin-bottom: 12px" />
    <div class="form-actions">
      <a-button type="primary" :loading="loading" :disabled="!canSubmit || disabled" @click="submit">
        <a-icon type="link" /> {{ $t('brokerAccounts.connect') }}
      </a-button>
    </div>
  </a-form>
</template>

<script>
export default {
  name: 'Mt5ConnectForm',
  props: {
    broker: { type: Object, required: true },
    disabled: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },
  data () {
    return {
      form: {
        name: '',
        host: 'mt5',
        port: 8001,
        symbolSuffix: '',
        allowedSymbols: 'XAUUSD',
        lotMode: 'fixed',
        fixedLot: 0.01,
        maxLot: 0.05,
        maxPositions: 2,
        maxDailyLoss: 10,
        defaultSlPoints: 1500,
        defaultTpPoints: 3000
      }
    }
  },
  computed: {
    canSubmit () {
      const f = this.form
      return !!(f.host && f.host.trim() && f.port > 0 && f.fixedLot > 0 && f.maxLot >= f.fixedLot)
    }
  },
  methods: {
    submit () {
      if (!this.canSubmit) return
      const f = this.form
      this.$emit('submit', {
        name: f.name,
        mt5_host: f.host.trim(),
        mt5_port: Number(f.port),
        mt5_symbol_suffix: (f.symbolSuffix || '').trim(),
        mt5_allowed_symbols: (f.allowedSymbols || '').trim(),
        mt5_lot_mode: f.lotMode,
        mt5_fixed_lot: Number(f.fixedLot),
        mt5_max_lot: Number(f.maxLot),
        mt5_max_positions: Number(f.maxPositions),
        mt5_max_daily_loss: Number(f.maxDailyLoss),
        mt5_require_sl: true,
        mt5_default_sl_points: Number(f.defaultSlPoints),
        mt5_default_tp_points: Number(f.defaultTpPoints)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.broker-form {
  ::v-deep .ant-form-item-label > label { font-size: 12px; color: #595959; }
}
.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
