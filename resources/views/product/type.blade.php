<select class="custom-select" name="type" id="{{ $id ?? '' }}" required>
    <option value="">{!! __('app.please_select') !!}</option>
     <option @if($type == "m") selected @endif value="m">{!! __('app.select_type_m') !!}</option>
     <option @if($type == "qm") selected @endif value="qm">{!! __('app.select_type_qm') !!}</option>
     <option @if($type == "piece") selected @endif value="piece">{!! __('app.select_type_piece') !!}</option>
     <option @if($type == "hour") selected @endif value="hour">{!! __('app.select_type_hour') !!}</option>
</select>