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
        $message = "The following contracts have a cancellation date less than 30 days away:\n";
        foreach ($contracts as $contract) {
            $message .= "- " . $contract->name . " (" . $contract->company_name . ")\n";
        }

        // Send email to system admin
        $to = config('mail.admin_address');
        $subject = "Contracts with Cancellation Date Less Than 30 Days Away";
        Mail::raw($message, function($email) use ($to, $subject) {
            $email->to($to);
            $email->subject($subject);
        });

        $this->info('Notification email sent to system admin');
    }
}
