<?php


return [
    'page_title' => 'Vertäge',
    'page_description' => 'Hier können Sie Ihre Verträge aktualisieren oder erstellen.',
    'new_contract' => 'Neuer Vertrag',
    'form_title' => 'Hinzufügen/Bearbeiten von Verträgen',
    'name' => 'Name',
    'description' => 'Beschreibung',
    'company_name' => 'Firmenname',
    'start_date' => 'Startdatum',
    'end_date' => 'Enddatum',
    'period_type' => 'Vertragsdauer Typ',
    'period_value' => 'Vertragsdauer',
    'cancellation_date' => 'Kündigungsfristdatum',
    'cancellation_period_type' => 'Kündigungsfrist Typ',
    'cancellation_period_value' => 'Kündigungsfrist Wert',
    'remaining_time' => 'Restzeit',
    'renew_remaining_time' => 'Verlängerung Restzeit',
    'pdf_document' => 'PDF-Dokument',
    'created' => 'Vertrag erfolgreich erstellt.',
    'updated' => 'Vertrag erfolgreich aktualisiert.',
    'deleted' => 'Vertrag gelöscht.',
    'cronjob' => [
        'mail' => [
            'header' => 'Folgende Verträge haben ein Kündigungsdatum, das weniger als 30 Tage entfernt ist:\n',
            'subject' => 'Verträge mit Kündigungsdatum weniger als 30 Tage entfernt',
            ]
    ]
];
