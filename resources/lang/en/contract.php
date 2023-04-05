<?php

return [
    'page_title' => 'Contracts',
    'page_description' => 'Here you can update or create your contracts.',
    'new_contract' => 'New Contract',
    'form_title' => 'Adding/Editing Contracts',
    'name' => 'Name',
    'description' => 'Description',
    'company_name' => 'Company Name',
    'start_date' => 'Start Date',
    'end_date' => 'End Date',
    'period_type' => 'Contract Period Type',
    'period_value' => 'Contract Period',
    'cancellation_date' => 'Cancellation Date',
    'cancellation_period_type' => 'Cancellation Period Type',
    'cancellation_period_valu' => 'Cancellation Period Value',
    'remaining_time' => 'Remaining Time',
    'renew_remaining_time' => 'Renew Remaining Time',
    'pdf_document' => 'PDF Document',
    'created' => 'Contract created successfully.',
    'updated' => 'Contract updated successfully.',
    'deleted' => 'Contract deleted.',
    'cronjob' => [
        'mail' => [
            'header' => 'The following contracts have a cancellation date less than 30 days away:\n',
            'subject' => 'Contracts with Cancellation Date Less Than 30 Days Away',
        ]
    ]
];
