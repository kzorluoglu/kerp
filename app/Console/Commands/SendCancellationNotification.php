<?php

namespace App\Console\Commands;

use App\Contract;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Carbon\Carbon;

class SendCancellationNotification extends Command
{
    protected $signature = 'send-cancellation-notification';
    protected $description = 'Send notification to system admin for contracts with cancellation date less than 30 days away';


    public function handle()
    {
        // Get all contracts with cancellation date less than 30 days away
        $contracts = Contract::where('cancellation_date', '<', Carbon::now()->addDays(30))
            ->get();

        // Check if there are any contracts to notify about
        if ($contracts->count() === 0) {
            $this->info('No contracts to notify about');
            return;
        }

        // Prepare email message
        $message = __('contract.cronjob.mail.message');
        foreach ($contracts as $contract) {
            $message .= sprintf('%s (%s) : %s\n', $contract->name, $contract->company->company_name, $contract->renewRemainingTimeText());
        }

        // Send email to system admin
        $to = config('mail.admin_address');
        $subject = __('contract.cronjob.mail.subject');
        Mail::raw($message, function($email) use ($to, $subject) {
            $email->to($to);
            $email->subject($subject);
        });

        $this->info('Notification email sent to system admin');
    }
}
