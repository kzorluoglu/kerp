<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;
use Storage;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $products = Product::paginate(15);

        if ($request->input('search')) {
            $search = $request->input('search');
            $products = Product::where('title', 'like', '%'.$search.'%')
            ->orWhere('product_number', 'like', '%'.$search.'%')
            ->orWhere('stock', 'like', '%'.$search.'%')
            ->orWhere('price', 'like', '%'.$search.'%')
            ->paginate(15);
        }

        return view('product.index', [
            'products' => $products,
            'search' => $search,
        ]);
    }

    public function create()
    {
        $product = new Product();

        return view('product.create', [
            'product' => $product,
        ]);
    }

    public function store(Request $request)
    {
        $product = new Product;
        $product->title =  $request->title;
        $product->description =  $request->description;
        $product->stock = (int)$request->stock;
        $product->product_number = $request->product_number;
        $product->price = floatval(str_replace(",", ".", $request->price));
        $product->type = $request->type;

        if ($request->image) {
            $imagePath = $request->image->store('images', 'public');
            $product->image = $imagePath;
        }

        try {
            $product->save();

            return redirect()->route('product.new')->with([
                'type' => 'success',
                'message' => __('app.success_added'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function show($id)
    {
        $product = Product::find($id);

        return view('product.show', [
            'product' => $product,
        ]);
    }

    public function update(Request $request)
    {
        $product = Product::find($request->input('id'));
        $product->title =  $request->title;
        $product->description =  $request->description;
        $product->stock = (int)$request->stock;
        $product->product_number = $request->product_number;
        $product->price = floatval(str_replace(",", ".", $request->price));
        $product->type = $request->type;

        if ($request->file('image')) {
            Storage::disk('public')->delete($product->image);
            $product->image = $request->file('image')->store('images', 'public');
        }

        try {
            $product->save();

            return redirect()->back()->with([
                'type' => 'success',
                'message' => __('app.success_updated'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function delete($id)
    {
        try {
            $product = Product::find($id);
            Storage::disk('public')->delete($product->image);
            $product->delete();

            return redirect()->route('product')->with([
              'type' => 'success',
              'message' => __('app.success_deleted'),
          ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }
}
